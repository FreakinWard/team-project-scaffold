import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';

import useFormField from './hooks/useFormField';

export interface SelectFieldOption {
  key: string;
  value: string;
}

export interface FormSelectFieldProps extends Omit<SelectProps, 'onChange'> {
  name: string;
  label: string;
  options: SelectFieldOption[];
  onChange?: (value: string) => void;
}

export default function FormSelectField({
  name,
  label,
  options,
  value,
  onChange,
  ...rest
}: FormSelectFieldProps) {
  const { field, hasError, errorMessage } = useFormField(name);

  // Extracted logic outside of Select to accomidate for numeric zero
  // This will not cover Boolean True/False
  const selectValue = field.value === '0' ? '0' : field.value || value || '';
  const ariaLabel = rest['aria-label'] || label;

  return (
    <FormControl fullWidth error={hasError}>
      <InputLabel id={`${name}-label`} size="small">
        {label}
      </InputLabel>
      <Select
        data-testid={`select-${label.toLowerCase()}`}
        id={name}
        label={ariaLabel}
        aria-labelledby={`${name}-label`}
        value={selectValue}
        onChange={(event: SelectChangeEvent) => {
          field.onChange(event);
          if (onChange) onChange(event.target.value);
        }}
        onBlur={field.onBlur}
        size="small"
        {...rest}
      >
        {options.map(option => (
          <MenuItem key={option.key} value={option.key} data-testid={`item-${option.key}`}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}
