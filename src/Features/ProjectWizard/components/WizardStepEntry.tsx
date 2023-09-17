import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function WizardStepEntry({ steps, activeStep, handleNext, handleBack }) {
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const Component = steps[activeStep]?.component;

  return (
    <Grid item xs={6}>
      <Box sx={{ mb: 2 }}>
        {Component && <Component />}

        {!isLastStep ? (
          <Button variant="contained" onClick={handleNext}>
            Continue
          </Button>
        ) : null}

        {isLastStep ? (
          <Button type="submit" variant="contained">
            Finish
          </Button>
        ) : null}

        <Button disabled={isFirstStep} onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Grid>
  );
}
