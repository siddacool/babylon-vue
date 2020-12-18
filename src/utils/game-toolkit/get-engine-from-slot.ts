/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import getDefaultSlot from './get-default-slot';
import getComponentFromSlot from './get-component-from-slot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getEngineFromSlot = (context: any) => {
  const defaultSlot = getDefaultSlot(context);

  return getComponentFromSlot(defaultSlot, 'babylon__engine');
};

export default getEngineFromSlot;
