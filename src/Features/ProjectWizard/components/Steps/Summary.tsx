import { Paper } from '@mui/material';
import FormLabelArrayField from 'components/Form/FormLabelArrayField';

import FormLabelField from '../../../../components/Form/FormLabelField';

export default function Summary() {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2, width: '250px' }}>
      <FormLabelField name="organizationName" label="Organization Name" />
      <FormLabelArrayField name="teams" label="Team Name" />
      <FormLabelArrayField name="projects" label="Project Name" />
    </Paper>
  );
}
