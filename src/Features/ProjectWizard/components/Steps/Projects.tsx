import React from 'react';
import { RadioButtonGroup } from 'react-hook-form-mui';

import { FormMultiFields } from '../../../../components/Form';
import useFormFieldArray from '../../../../components/Form/hooks/useFormFieldArray';
export default function Projects() {
  const { fields } = useFormFieldArray('teams');

  const options = fields.map(field => ({ id: field.name, label: field.name }));

  return (
    <FormMultiFields name="projects" label="Project Name" required>
      <RadioButtonGroup name="teamName" options={options} required />
    </FormMultiFields>
  );
}
