import { Grid } from '@mui/material';
import Form from 'components/Form';
import * as React from 'react';

import { Organization, Projects, Teams } from './components/Steps';
import CreateProject from './components/Steps/CreateProject';
import WizardStepEntry from './components/WizardStepEntry';
import WizardSteps from './components/WizardSteps';

const steps = [
  {
    label: 'Your organization',
    description: `What's the name of your organization?`,
    component: Organization,
  },
  {
    label: 'Teams',
    description: 'Who are the teams that help deliver the organizations value?',
    component: Teams,
  },
  {
    label: 'Projects',
    description: `Tell me about your projects, their deliverables, & the teams who are working on them.`,
    component: Projects,
  },
  {
    label: 'Create',
    description: `Confirm and create`,
    component: CreateProject,
  },
];

export default function ProjectWizard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  // eslint-disable-next-line no-console
  const createProject = formValues => console.log('test', formValues);

  return (
    <Grid container>
      <WizardSteps steps={steps} activeStep={activeStep} handleReset={handleReset} />

      <Form handleSubmit={createProject} defaultValues={{ teams: ['Default Team'] }}>
        <WizardStepEntry
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </Form>
    </Grid>
  );
}
