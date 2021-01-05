/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function meshSphere(component: any, scene: any) {
  const {
    name,
    segments,
    diameter,
    updatable,
    sideOrientation,
    x: posX = null,
    y: posY = null,
    z: posZ = null,
  } = component.props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sphere = component.type.plug.CreateSphere(
    name,
    segments,
    diameter,
    scene,
    updatable,
    sideOrientation,
  );

  if (posX || posX === 0) {
    sphere.position.x = posX;
  }

  if (posY || posY === 0) {
    sphere.position.y = posY;
  }

  if (posZ || posZ === 0) {
    sphere.position.z = posZ;
  }
}
