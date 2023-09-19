import { Grid, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Form from 'components/Form';

import Item from '../../../components/Grid';

const initialState = {
  teams: [{ name: 'Default Team' }],
  projects: [{ name: 'Default Project' }],
};

export default function WizardStepEntry({ steps, activeStep, handleNext, handleBack }) {
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;
  const isComplete = activeStep === steps.length;

  const handleSubmit = formValues => {
    // eslint-disable-next-line no-console
    console.log('test', { formValues });

    handleNext();
  };

  const Component = steps[activeStep]?.component;

  return (
    <>
      <Grid item xs={8}>
        <Item>
          <Form handleSubmit={handleSubmit} defaultValues={initialState}>
            {Component && <Component />}
            {!isComplete && (
              <Stack direction="row" sx={{ width: 250 }}>
                {!isLastStep ? (
                  <Button type="submit" variant="contained">
                    Continue
                  </Button>
                ) : null}

                {isLastStep ? (
                  <Button type="submit" variant="contained">
                    Create
                  </Button>
                ) : null}

                <Button disabled={isFirstStep} onClick={handleBack}>
                  Back
                </Button>
              </Stack>
            )}
            {isComplete && <div>Project created! 🚀</div>}
          </Form>
        </Item>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        OG Buttons
      </Grid>
    </>
  );
}
