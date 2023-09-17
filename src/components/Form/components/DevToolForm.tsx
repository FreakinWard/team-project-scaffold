/* istanbul ignore file */
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const DevTool = dynamic(() => import('@hookform/devtools').then(mod => mod.DevTool), {
  ssr: false,
});

export default function DevToolForm({ control }) {
  const [isMounted, setIsMounted] = useState(false);

  const isTestEnv = Boolean(process.env.NODE_ENV === 'test');
  const disablePlugin = !Boolean(process.env.DEVTOOLS_REACT_HOOK_FORM);

  const isDisabled = disablePlugin || isTestEnv;

  useEffect(() => {
    !isDisabled && setIsMounted(true);
  }, [isDisabled]);

  if (isDisabled) return null;

  return isMounted && <DevTool control={control} placement="bottom-right" />;
}
