import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useMemo } from 'react';

import { FormTextField } from '../Form';
import useFormFieldArray from './hooks/useFormFieldArray';

export default function FormMultiFields({ name, label }) {
  const { fields, append, remove } = useFormFieldArray<string[]>(name);

  const lastItemHasValue = useMemo(() => {
    const lastIndex = fields.length - 1;

    return Boolean(fields[lastIndex]);
  }, [fields]);

  return (
    <Box sx={{ width: 250 }}>
      {fields?.map((field, index) => (
        <Stack key={index} direction="row">
          <FormTextField name={`${name}.${index}`} label={label} autoFocus />
          <IconButton disabled={index === 0} onClick={() => remove(index)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}

      <Button startIcon={<AddIcon />} onClick={() => append(null)} disabled={!lastItemHasValue}>
        Add
      </Button>
    </Box>
  );
}
