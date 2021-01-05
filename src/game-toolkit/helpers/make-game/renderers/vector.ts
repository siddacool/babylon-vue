/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getComponentByIdFromChildren } from '../../get-components';
import { BABYLON_COMPONENT_VECTOR } from '../../constants';

export default function vector(component: any) {
  const vectorComponent = getComponentByIdFromChildren(
    component,
    BABYLON_COMPONENT_VECTOR,
  );

  if (!vectorComponent) {
    return null;
  }

  return {
    ...vectorComponent.props,
    vectorPlug: vectorComponent.type.plug,
  };
}
