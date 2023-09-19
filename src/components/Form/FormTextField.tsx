import Box from '@mui/material/Box';
import { TextFieldElement } from 'react-hook-form-mui';

export default function FormTextField({ name, label, ...rest }) {
  return (
    <Box sx={{ padding: 1 }}>
      <TextFieldElement {...rest} name={name} label={label} size="small" />
    </Box>
  );
}
