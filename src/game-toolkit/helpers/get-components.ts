/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { VueComponent } from './types';
import { babylonMatcher } from './utils';

const matchComponentId = (component: VueComponent, id: string) =>
  component &&
  component.type &&
  component.type[babylonMatcher] &&
  component.type[babylonMatcher] === id;

const getDefaultSlotFromContextMain = (context: any) =>
  context.slots && context.slots ? context.slots.default() : null;

export const getDefaultSlotFromContext = getDefaultSlotFromContextMain;

const getDefaultSlotFromChildrenMain = (component: { children: any }) =>
  component && component.children && component.children.default
    ? component.children.default()
    : null;

export const getDefaultSlotFromChildren = getDefaultSlotFromChildrenMain;

const getComponentByIdMain = (
  components: any[],
  id: string,
  multiple = false,
) => {
  if (!components || (components && !components.length)) {
    return null;
  }

  return multiple
    ? components.filter((d: VueComponent) => matchComponentId(d, id))
    : components.find((d: VueComponent) => matchComponentId(d, id));
};

export const getComponentById = getComponentByIdMain;

export const getComponentByIdFromContext = (
  context: any,
  id: string,
  multiple = false,
) => {
  const components = getDefaultSlotFromContextMain(context);

  if (!components) {
    return null;
  }

  return getComponentByIdMain(components, id, multiple);
};

export const getComponentByIdFromChildren = (
  component: any,
  id: string,
  multiple = false,
) => {
  const components = getDefaultSlotFromChildrenMain(component);

  if (!components) {
    return null;
  }

  return getComponentByIdMain(components, id, multiple);
};

export const getComponentsFromContext = (context: any) => {
  const components = getDefaultSlotFromContextMain(context);

  if (!components) {
    return null;
  }

  return components;
};

export const getComponentsFromChildren = (context: any) => {
  const components = getDefaultSlotFromChildrenMain(context);

  if (!components) {
    return null;
  }

  return components;
};
