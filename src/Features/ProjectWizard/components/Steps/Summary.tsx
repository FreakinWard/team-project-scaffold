import FormLabelArrayField from 'components/Form/FormLabelArrayField';

import FormLabelField from '../../../../components/Form/FormLabelField';

export default function Summary() {
  return (
    <>
      <FormLabelField name="organizationName" label="Organization Name" />
      <FormLabelArrayField name="teams" label="Team Name" />
      <FormLabelArrayField name="projects" label="Project Name" />
    </>
  );
}
