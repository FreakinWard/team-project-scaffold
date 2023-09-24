import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import React, { Children, cloneElement } from 'react';

import { FormTextField } from '../Form';
import useFormFieldArray from './hooks/useFormFieldArray';

export default function FormMultiFields({ name, label, children, ...rest }) {
  const { fields, append, remove } = useFormFieldArray(name);

  const renderChildren = index => {
    return Children.map(children, child => {
      return cloneElement(child, {
        name: `${name}.${index}.teamName`,
      });
    });
  };

  return (
    <>
      {fields?.map((field, index) => (
        <Stack key={field.id} direction="row">
          <FormTextField {...rest} name={`${name}.${index}.name`} label={label} autoFocus />
          {renderChildren(index)}
          <IconButton disabled={index === 0} onClick={() => remove(index)} tabIndex={-1}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}

      <Button startIcon={<AddIcon />} onClick={() => append(null)}>
        Add
      </Button>
    </>
  );
}
