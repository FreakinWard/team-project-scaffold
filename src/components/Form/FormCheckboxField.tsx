import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';

import useFormField from './hooks/useFormField';

export interface FormCheckboxFieldProps extends Omit<CheckboxProps, 'onChange'> {
  name: string;
  label: string;
  onChange?: (checked: boolean) => void;
}

export default function FormCheckboxField({
  name,
  label,
  onChange,
  ...rest
}: FormCheckboxFieldProps) {
  const { field, hasError, errorMessage } = useFormField(name);

  return (
    <FormControl fullWidth error={hasError}>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            id={name}
            checked={field.value || false}
            value={field.value || false}
            onChange={event => {
              field.onChange(event);
              onChange?.(event.target.checked);
            }}
            onBlur={field.onBlur}
            size="small"
            {...rest}
          />
        }
      />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}
