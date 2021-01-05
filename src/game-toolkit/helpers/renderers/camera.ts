/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from '@babylonjs/core';
import vector from './vector';

export default function camera(component: any, canvas: any, scene: any) {
  const vectorComponent = vector(component);

  if (!vectorComponent) {
    return;
  }

  const {
    x: vectorPosX = 0,
    y: vectorPosY = 0,
    z: vectorPosZ = 0,
    vectorPlug,
  } = vectorComponent;

  const camera = new component.type.plug(
    component.props.name,
    new vectorPlug(vectorPosX, vectorPosY, vectorPosZ),
    scene,
  );

  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, false);
}
