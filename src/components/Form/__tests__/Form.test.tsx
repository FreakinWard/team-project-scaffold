import { Button } from '@mui/material';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as yup from 'yup';

import { selectFieldChange, textFieldChange } from '../../../core/userActions';
import Form, { FormCheckboxField, FormSelectField, FormTextField } from '../../Form';

interface FormTypes {
  textField: string;
  selectField: string;
}

describe('Form', () => {
  const selectFieldOptions = [
    { key: 'optionOneValue', value: 'Option One' },
    { key: 'optionTwoValue', value: 'Option Two' },
    { key: 'optionThreeValue', value: 'Option Three' },
  ];

  const renderComponent = ({ validationSchema = null } = {}) => {
    // arrange
    const mockHandleSubmit = jest.fn();
    const mockHandleError = jest.fn();
    const mockHandlerChangeSelect = jest.fn();

    const tree = (
      <Form
        handleSubmit={mockHandleSubmit}
        handleError={mockHandleError}
        validationSchema={validationSchema}
      >
        <FormTextField label="Text Field" name="textField" />
        <FormSelectField
          label="Select Field"
          name="selectField"
          options={selectFieldOptions}
          onChange={mockHandlerChangeSelect}
        />

        <Button type="submit">Submit Form</Button>
      </Form>
    );

    // act
    // assert
    render(tree);

    return { mockHandleError, mockHandleSubmit, mockHandlerChangeSelect };
  };

  it('should populate form and submit values', async () => {
    // arrange
    const optionToSelect = selectFieldOptions[1];
    const expectedSelectFieldOptions = selectFieldOptions.map(option => option.value);

    const expectedFormValues = {
      textField: 'textFieldValue',
      selectField: optionToSelect.key,
    };

    // act
    const { mockHandleSubmit, mockHandlerChangeSelect } = renderComponent();

    // act - populate form
    await textFieldChange('Text Field', expectedFormValues.textField);
    await selectFieldChange('Select Field', optionToSelect.value, expectedSelectFieldOptions);

    // act - submit form
    await act(() => userEvent.click(screen.getByText('Submit Form')));

    // assert
    await waitFor(() => expect(mockHandlerChangeSelect).toHaveBeenCalledWith(optionToSelect.key));
    await waitFor(() =>
      expect(mockHandleSubmit).toHaveBeenCalledWith(expectedFormValues, expect.anything())
    );
  });

  it('should show validation messages and not submit form when form is invalid', async () => {
    // arrange
    const allFieldsRequiredSchema = yup
      .object<FormTypes>({
        textField: yup.string().required(),
        selectField: yup.string().required(),
      })
      .required();

    // act
    const { mockHandleError, mockHandleSubmit } = renderComponent({
      validationSchema: allFieldsRequiredSchema,
    });

    // act
    const submitButton = await screen.findByText('Submit Form');

    await act(() => userEvent.click(submitButton));

    // assert
    await waitFor(() => expect(mockHandleSubmit).not.toHaveBeenCalled());
    await waitFor(() => expect(mockHandleError).toHaveBeenCalled());

    await screen.findByText('textField is a required field');
    screen.getByText('selectField is a required field');
  });
});
