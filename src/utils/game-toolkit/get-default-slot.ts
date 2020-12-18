// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getDefaultSlot = (context: { slots: { default: () => never } }) =>
  context.slots && context.slots ? context.slots.default() : null;

export default getDefaultSlot;
