import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import useFormField from './hooks/useFormField';

export default function FormLabelField({ name, label, ...rest }) {
  const { field } = useFormField(name);

  return (
    <>
      <Typography variant="body1" noWrap sx={{ fontWeight: 'bold' }}>
        {`${label}: `}
      </Typography>
      {field.value.map((item, index) => (
        <Stack key={index} direction="row" alignItems="center" gap={4} {...rest}>
          <br />
          <Typography variant="body1">{item.name}</Typography>
        </Stack>
      ))}
    </>
  );
}
