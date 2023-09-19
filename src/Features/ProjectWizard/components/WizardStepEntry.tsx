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

  // eslint-disable-next-line no-console
  const createProject = formValues => console.log('test', formValues);

  const Component = steps[activeStep]?.component;

  return (
    <>
      <Grid item xs={8}>
        <Item>
          <Form handleSubmit={createProject} defaultValues={initialState}>
            {Component && <Component />}
          </Form>
        </Item>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Stack direction="row" sx={{ width: 250 }}>
          {!isLastStep ? (
            <Button variant="contained" onClick={handleNext}>
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
      </Grid>
    </>
  );
}
