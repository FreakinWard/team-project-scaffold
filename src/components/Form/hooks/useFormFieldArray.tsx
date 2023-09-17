import { useFieldArray, useFormContext } from 'react-hook-form';

export default function useFormFieldArray<T>(name: string) {
  const { control } = useFormContext();

  const fieldArray = useFieldArray({ control, name });

  return {
    ...fieldArray,
    fields: fieldArray.fields as T[],
  };
}
