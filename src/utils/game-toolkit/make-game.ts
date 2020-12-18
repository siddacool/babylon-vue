/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

  const scene = new sceneComponent.type.core(engine);

  console.log(scene);
};

export default makeGame;
