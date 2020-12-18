/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Vector3 } from '@babylonjs/core';
import { logError } from '../../utils/logger';
import getDefaultSlotFromChildren from './get-default-slot-from-children';

const getSceneComponent = (engineComponent: any) => {
  const defaultSlot = getDefaultSlotFromChildren(engineComponent);

  return defaultSlot &&
    defaultSlot[0] &&
    defaultSlot[0].type &&
    defaultSlot[0].type.id &&
    defaultSlot[0].type.id === 'babylon__scene'
    ? defaultSlot[0]
    : '';
};

const getCameraComponents = (component: any) => {
  const defaultSlot = getDefaultSlotFromChildren(component);

  return defaultSlot &&
    defaultSlot.filter(
      (ds: { type: { id: string } }) =>
        ds && ds.type && ds.type.id === 'babylon__camera',
    )
    ? defaultSlot.filter(
        (ds: { type: { id: string } }) =>
          ds && ds.type && ds.type.id === 'babylon__camera',
      )
    : [];
};

const getLightComponents = (component: any) => {
  const defaultSlot = getDefaultSlotFromChildren(component);

  return defaultSlot &&
    defaultSlot.filter(
      (ds: { type: { id: string } }) =>
        ds && ds.type && ds.type.id === 'babylon__light',
    )
    ? defaultSlot.filter(
        (ds: { type: { id: string } }) =>
          ds && ds.type && ds.type.id === 'babylon__light',
      )
    : [];
};

const getVectorComponent = (component: any) => {
  const defaultSlot = getDefaultSlotFromChildren(component);

  return defaultSlot &&
    defaultSlot[0] &&
    defaultSlot[0].type &&
    defaultSlot[0].type.id &&
    defaultSlot[0].type.id === 'babylon__vector'
    ? defaultSlot[0]
    : '';
};

const cameraSetup = (component: any, scene: any, canvas: any) => {
  const vectorComponent = getVectorComponent(component);

  if (!vectorComponent) {
    logError('Babylon Canvas', 'Camera Vector is missing');
    return;
  }

  const {
    x: cameraVectorPosX = 0,
    y: cameraVectorPosY = 0,
    z: cameraVectorPosZ = 0,
  } = vectorComponent.props;

  const camera = new component.type.core(
    component.props.name,
    new vectorComponent.type.core(
      cameraVectorPosX,
      cameraVectorPosY,
      cameraVectorPosZ,
    ),
    scene,
  );

  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, false);
};

const lightSetup = (cameraComponent: any, scene: any) => {
  const vectorComponent = getVectorComponent(cameraComponent);

  if (!vectorComponent) {
    logError('Babylon Canvas', 'Camera Vector is missing');
    return;
  }

  const {
    x: cameraVectorPosX = 0,
    y: cameraVectorPosY = 0,
    z: cameraVectorPosZ = 0,
  } = vectorComponent.props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const light = new cameraComponent.type.core(
    cameraComponent.props.name,
    new vectorComponent.type.core(
      cameraVectorPosX,
      cameraVectorPosY,
      cameraVectorPosZ,
    ),
    scene,
  );
};

const createMeshSphere = (component: any, scene: any) => {
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
  const sphere = component.type.core.CreateSphere(
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
};

const meshShapeSetup = (component: any, scene: any) => {
  if (component.type.variant && component.type.variant === 'mesh-sphere') {
    createMeshSphere(component, scene);
  }
};

const getMeshShapes = (component: any) => {
  const defaultSlot = getDefaultSlotFromChildren(component);

  return defaultSlot &&
    defaultSlot.filter(
      (ds: { type: { id: string } }) =>
        ds && ds.type && ds.type.id === 'babylon__mesh',
    )
    ? defaultSlot.filter(
        (ds: { type: { id: string } }) =>
          ds && ds.type && ds.type.id === 'babylon__mesh',
      )
    : [];
};

const createScene = (engine: any, canvas: any, sceneComponent: any) => {
  const scene = new sceneComponent.type.core(engine);
  const cameraComponents = getCameraComponents(sceneComponent);

  if (!cameraComponents || !cameraComponents.length) {
    logError('Babylon Canvas', 'Camera is missing');
    return;
  }

  cameraComponents.forEach((cameraComponent: any) => {
    cameraSetup(cameraComponent, scene, canvas);
  });

  const lightComponents = getLightComponents(sceneComponent);

  if (lightComponents && lightComponents.length) {
    lightComponents.forEach((lightComponent: any) => {
      lightSetup(lightComponent, scene);
    });
  }

  const meshShapes = getMeshShapes(sceneComponent);

  if (meshShapes && meshShapes.length) {
    meshShapes.forEach((meshShape: any) => {
      meshShapeSetup(meshShape, scene);
    });
  }

  return scene;
};

const makeGame = (
  engine: any,
  engineComponent: { type: { core: new (arg0: any, arg1: boolean) => any } },
  canvas: any,
) => {
  if (!engineComponent) {
    logError('Babylon Canvas', 'Engine is missing');
    return;
  }

  const sceneComponent = getSceneComponent(engineComponent);

  if (!sceneComponent) {
    logError('Babylon Canvas', 'Scene is missing');
    return;
  }

  const scene = createScene(engine, canvas, sceneComponent);

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export default makeGame;
