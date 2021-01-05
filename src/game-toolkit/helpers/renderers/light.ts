/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import vector from './vector';

export default function camera(component: any, scene: any) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const light = new component.type.plug(
    component.props.name,
    new vectorPlug(vectorPosX, vectorPosY, vectorPosZ),
    scene,
  );
}
