/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const getDefaultSlotFromChildren = (component: {
  children: { default: () => any };
}) =>
  component && component.children && component.children.default
    ? component.children.default()
    : null;

export default getDefaultSlotFromChildren;
