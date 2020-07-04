import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

export function addBoxesLayer(YSHIFT = 0) {
  const NUM = 4;
  const GAP_SIZE = 1;
  const BOX_SIZE = 0.7;
  let x = 0;
  let z = 0;
  const xShift = -1.5;
  const zShift = -1.5;
  const boxes = new Array(NUM * NUM).fill(1).map((_, index) => {
    x++;
    x %= NUM;
    if (index % NUM === 0) {
      z++;
    }
    const box = createAndSetAttributes('a-box', {
      position: { x: x + xShift, y: 7 + GAP_SIZE * YSHIFT, z: -z + zShift },
      width: BOX_SIZE,
      height: BOX_SIZE,
      depth: BOX_SIZE,
      'falling-block': {
        delay: Math.random() + YSHIFT,
        x: x + xShift,
        y: 10 + GAP_SIZE * YSHIFT,
        z: -z + zShift,
      },
      'dynamic-body': {
        shape: 'box',
        mass: 1,
        angularDamping: 0.5,
        linearDamping: 0.2,
      },
      color: '#8998ea',
      raycastable: {},
    });
    return box;
  });

  return boxes;
}

export function addBoxes(scene: Scene) {
  const NUM = 5;
  const boxesLayers = new Array(NUM).fill(1).map((_, index) => {
    return addBoxesLayer(index);
  });

  const boxes = [];

  boxesLayers.forEach((boxesLayer) => {
    boxesLayer.forEach((box) => {
      scene?.appendChild(box);
      boxes.push(box);
    });
  });

  return boxes;
}
