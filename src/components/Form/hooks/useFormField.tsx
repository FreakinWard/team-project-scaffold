import { useController, useFormContext } from 'react-hook-form-mui';

export default function useFormField(name: string, rules = {}) {
  const { control, resetField: resetFormField } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  const errorMessage = fieldState.error?.message?.toString();
  const hasError = Boolean(errorMessage);

  const resetField = () => resetFormField(name);

  return { field, errorMessage, hasError, resetField };
}
