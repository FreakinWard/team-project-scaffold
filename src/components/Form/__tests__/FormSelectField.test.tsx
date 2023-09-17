import { render } from '@testing-library/react';

import { selectFieldChange } from '../../../core/userActions';
import Form, { FormSelectField } from '../../Form';
import { SelectFieldOption } from '../FormSelectField';

describe('FormSelectField', () => {
  const renderComponent = (options: SelectFieldOption[]) => {
    const mockHandleSubmit = jest.fn();
    const tree = (
      <Form handleSubmit={mockHandleSubmit}>
        <FormSelectField label="Select Field" name="selectField" options={options} />
      </Form>
    );

    render(tree);
  };

  it('should render options to select', async () => {
    // arrange
    const options = [
      { key: 'optionOneValue', value: 'Option One' },
      { key: '0', value: '0' },
      { key: '1', value: '2' },
      { key: 'true', value: 'True' },
      { key: 'false', value: 'False' },
    ];

    // act
    renderComponent(options);

    // assert
    for (const option of options) {
      await selectFieldChange('Select Field', option.value);
    }
  });
});
