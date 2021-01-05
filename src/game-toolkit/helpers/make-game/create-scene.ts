/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getComponentsFromChildren } from '../get-components';

export default function createScene(
  engine: any,
  canvas: any,
  sceneComponent: any,
) {
  const scene = new sceneComponent.type.plug(engine);
  const sceneChildren = getComponentsFromChildren(sceneComponent);
  console.log(sceneChildren);

  return scene;
}
