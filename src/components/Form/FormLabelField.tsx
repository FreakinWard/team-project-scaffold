import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import useFormField from './hooks/useFormField';

export default function FormLabelField({ name, label, ...rest }) {
  const { field } = useFormField(name);

  return (
    <Stack direction="row" alignItems="center" gap={1} {...rest}>
      <Typography variant="body1" noWrap sx={{ fontWeight: 'bold' }}>
        {`${label}: `}
      </Typography>
      <Typography variant="body1">{field.value}</Typography>
    </Stack>
  );
}
