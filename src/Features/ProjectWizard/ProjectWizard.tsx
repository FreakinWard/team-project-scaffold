import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

import { Organization, Projects, Summary, Teams } from './components/Steps';
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
    component: Summary,
  },
];

export default function ProjectWizard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <Grid container spacing={2}>
        <WizardSteps steps={steps} activeStep={activeStep} handleReset={handleReset} />

        <WizardStepEntry
          steps={steps}
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </Grid>
    </Box>
  );
}
