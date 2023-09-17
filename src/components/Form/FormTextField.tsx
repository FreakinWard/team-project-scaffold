import { FormControl, FormHelperText } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

import useFormField from './hooks/useFormField';

export default function FormTextField({ name, label, ...rest }) {
  const { hasError, errorMessage } = useFormField(name);

  return (
    <FormControl fullWidth error={hasError}>
      <TextFieldElement {...rest} name={name} label={label} size="small" />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}
