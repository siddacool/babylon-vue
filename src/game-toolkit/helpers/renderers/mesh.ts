/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BABYLON_COMPONENT_MESH_SPHERE } from '../constants';
import meshSphere from './mesh-sphere';

export default function mesh(component: any, scene: any) {
  if (component.type.variant) {
    const { variant } = component.type;

    switch (variant) {
      case BABYLON_COMPONENT_MESH_SPHERE: {
        meshSphere(component, scene);
        break;
      }
      default: {
        break;
      }
    }
  }
}
