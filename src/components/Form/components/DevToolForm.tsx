/* istanbul ignore file */

import { DevTool } from '@hookform/devtools';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form-mui';

// const DevTool = dynamic(() => import('@hookform/devtools').then(mod => mod.DevTool), {
//   ssr: false,
// });

export default function DevToolForm() {
  const methods = useForm({
    mode: 'onChange',
  });
  // const [isMounted, setIsMounted] = useState(false);

  const isNextServer = typeof window === 'undefined';
  const isTestEnv = Boolean(process.env.NODE_ENV === 'test');
  const disablePlugin = !Boolean(process.env.DEVTOOLS_REACT_HOOK_FORM);

  // const isDisabled = isNextServer || disablePlugin || isTestEnv;
  const isDisabled = isNextServer;

  // console.log('test', isDisabled, isNextServer, isTestEnv, disablePlugin);

  // useEffect(() => {
  //   !isDisabled && setIsMounted(true);
  // }, [isDisabled]);

  // return <DevTool control={methods.control} placement="bottom-right" />;
  if (isDisabled) return null;

  return <DevTool control={methods.control} placement="bottom-right" />;
}
