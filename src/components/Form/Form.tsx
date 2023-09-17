import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import React from 'react';
import { FormProvider, useForm, ValidationMode } from 'react-hook-form';
import * as yup from 'yup';

import DevToolForm from './components/DevToolForm';

export type DefaultValuesType = Record<string, string | number | object>;

interface FormProps<T = DefaultValuesType> {
  children: JSX.Element | JSX.Element[];
  id?: string;
  handleSubmit: (data: object) => void;
  defaultValues?: T;
  handleError?: (error) => void;
  validationSchema?: yup.ObjectSchema<unknown>;
  mode?: keyof ValidationMode;
}

export default function Form({
  children,
  id,
  handleSubmit,
  handleError,
  validationSchema,
  defaultValues,
  mode = 'onChange',
  ...rest
}: FormProps) {
  const resolver = validationSchema ? yupResolver(validationSchema) : null;
  const methods = useForm({
    resolver,
    mode,
    defaultValues,
  });

  return (
    <Box>
      <FormProvider {...methods}>
        <form id={id} onSubmit={methods.handleSubmit(handleSubmit, handleError)} {...rest}>
          {children}
        </form>
        <DevToolForm control={methods.control} />
      </FormProvider>
    </Box>
  );
}
