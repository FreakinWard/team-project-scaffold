import { Box } from '@mui/material';
import React from 'react';
import { FormContainer, ValidationMode } from 'react-hook-form-mui';

import DevToolForm from './components/DevToolForm';

export type DefaultValuesType = Record<string, string | number | object>;

interface FormProps<T = DefaultValuesType> {
  children: JSX.Element | JSX.Element[];
  id?: string;
  handleSubmit: (data: object) => void;
  defaultValues?: T;
  handleError?: (error) => void;
  mode?: keyof ValidationMode;
}

export default function Form({ children, handleSubmit, handleError, defaultValues }: FormProps) {
  return (
    <Box>
      <FormContainer onSuccess={handleSubmit} onError={handleError} defaultValues={defaultValues}>
        {children}
        <DevToolForm />
      </FormContainer>
    </Box>
  );
}
