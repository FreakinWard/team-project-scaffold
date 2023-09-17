import { Paper } from '@mui/material';

import FormLabelField from '../../../../components/Form/FormLabelField';

export default function CreateProject() {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2, width: '250px' }}>
      <FormLabelField name="organizationName" label="Organization Name" />
      <FormLabelField name="teamName" label="Team Name" />
      <FormLabelField name="projectName" label="Project Name" />
    </Paper>
  );
}
