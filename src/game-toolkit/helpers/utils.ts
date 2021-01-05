/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const getDefaultSlotMain = (context: any) =>
  context.slots && context.slots ? context.slots.default() : null;

export const getDefaultSlot = getDefaultSlotMain;

export const getFirstComponentFromSlot = (context: any, name: string) => {
  const defaultSlot = getDefaultSlotMain(context);

  return defaultSlot &&
    defaultSlot[0] &&
    defaultSlot[0].type &&
    defaultSlot[0].type.name &&
    defaultSlot[0].type.name === name
    ? defaultSlot[0]
    : null;
};

export const getDefaultSlotFromChildren = (component: {
  children: { default: () => any };
}) =>
  component && component.children && component.children.default
    ? component.children.default()
    : null;

export const getCompoentsFromSlotByName = (component: any[], name: string) => {
  const filtered = component.filter(
    (d: { type: { name: string } }) =>
      d && d.type && d.type.name && d.type.name === name,
  );

  return filtered;
};

export const getCompoentFromSlotByName = (component: any[], name: string) => {
  // console.log(component);

  const found = component.find(
    (d: { type: { name: string } }) =>
      d && d.type && d.type.name && d.type.name === name,
  );

  return found;
};
