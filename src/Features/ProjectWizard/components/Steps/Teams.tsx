import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useMemo } from 'react';

import { FormTextField } from '../../../../components/Form';
import useFormField from '../../../../components/Form/hooks/useFormField';
import useFormFieldArray from '../../../../components/Form/hooks/useFormFieldArray';

export default function Teams() {
  const { fields, append, remove } = useFormFieldArray<string[]>('teams');

  const lastTeamHasValue = useMemo(() => {
    const lastIndex = fields.length - 1;

    return Boolean(fields[lastIndex]);
  }, [fields]);

  return (
    <Box sx={{ width: 250 }}>
      {fields?.map((field, index) => (
        <Stack key={index} direction="row">
          <FormTextField name={`teams.${index}`} label="Team Name" autoFocus />
          <IconButton disabled={index === 0} onClick={() => remove(index)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}

      <Button startIcon={<AddIcon />} onClick={() => append(null)} disabled={!lastTeamHasValue}>
        Add Team
      </Button>
    </Box>
  );
}
