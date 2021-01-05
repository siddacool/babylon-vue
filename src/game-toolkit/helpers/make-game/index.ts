/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import createScene from './create-scene';

export default function makeGame(
  engine: any,
  canvas: any,
  sceneComponent: any,
) {
  const scene = createScene(engine, canvas, sceneComponent);

  engine.runRenderLoop(() => {
    scene.render();
  });
}
