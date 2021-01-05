/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getComponentsFromChildren } from './get-components';
import { BABYLON_COMPONENT_CAMERA, BABYLON_COMPONENT_LIGHT } from './constants';
import { cameraRender, lightRender } from './renderers';
import { babylonMatcher } from './utils';

const conditionalRender = (component: any, canvas: any, scene: any) => {
  if (component && component.type && component.type[babylonMatcher]) {
    const matcher = component.type[babylonMatcher];

    switch (matcher) {
      case BABYLON_COMPONENT_CAMERA: {
        cameraRender(component, canvas, scene);
        break;
      }
      case BABYLON_COMPONENT_LIGHT: {
        lightRender(component, scene);
        break;
      }
      default: {
        break;
      }
    }
  }
};

const comonentLooper = (components: any[], canvas: any, scene: any) => {
  if (!components) {
    return null;
  }

  components.forEach((component) =>
    conditionalRender(component, canvas, scene),
  );
};

function createScene(engine: any, canvas: any, sceneComponent: any) {
  const scene = new sceneComponent.type.plug(engine);
  const sceneChildren = getComponentsFromChildren(sceneComponent);
  comonentLooper(sceneChildren, canvas, scene);

  return scene;
}

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
