import { act, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export async function selectFieldChange(
  label: string,
  value: string,
  expectedOptions: string[] = null
) {
  // arrange
  const selectCompoElement = await screen.findByTestId(`select-${label.toLowerCase()}`);

  // act - open
  const button = within(selectCompoElement).getByRole('button');
  await act(() => userEvent.click(button));

  // arrange - options
  const listBox = within(screen.getByRole('presentation')).getByRole('listbox');

  if (expectedOptions) {
    // arrange
    const optionElements = await within(listBox).findAllByRole('option');
    const optionKeys = optionElements.map(li => li.textContent);

    // assert - select
    await waitFor(() => expect(optionKeys).toEqual(expectedOptions));
  }

  // act - select
  await act(() => userEvent.click(within(listBox).getByText(value)));

  // assert - selected value
  await waitFor(() => expect(within(selectCompoElement).getByText(value)).toBeVisible());
}

export async function textFieldChange(label: string, value: string, clearBeforeEntry = false) {
  // arrange
  const theTextField = await screen.findByLabelText(label);

  // act
  if (clearBeforeEntry) await act(() => userEvent.clear(theTextField));

  await act(() => userEvent.type(theTextField, value));

  // assert
  await waitFor(() => expect(screen.getByLabelText(label)).toHaveValue(value));
}
