/* istanbul ignore file */

import dynamic from 'next/dynamic';
import { useFormContext } from 'react-hook-form-mui';

const DevTool = dynamic(() => import('@hookform/devtools').then(mod => mod.DevTool), {
  ssr: false,
});

export default function DevToolForm() {
  const { control } = useFormContext();

  return <DevTool control={control} placement="bottom-right" />;
}
