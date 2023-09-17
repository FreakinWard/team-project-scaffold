import { FormControl, FormHelperText, TextField } from '@mui/material';

import useFormField from './hooks/useFormField';

export default function FormTextField({ name, label, ...rest }) {
  const { field, hasError, errorMessage } = useFormField(name);

  return (
    <FormControl fullWidth error={hasError}>
      <TextField
        error={hasError}
        id={name}
        label={label}
        value={field.value || ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
        size="small"
        fullWidth
        {...rest}
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}
