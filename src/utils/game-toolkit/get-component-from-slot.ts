/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getComponentFromSlot = (defaultSlot: any, name: string) => {
  return defaultSlot &&
    defaultSlot[0] &&
    defaultSlot[0].type &&
    defaultSlot[0].type.id &&
    defaultSlot[0].type.id === name
    ? defaultSlot[0]
    : '';
};

export default getComponentFromSlot;
