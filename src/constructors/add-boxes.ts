import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

const STARTING_Y = 10;
const GAP_SIZE = 1;
const BOX_SIZE = 0.8;
const zShift = -1.5;
const xShift = -1.5;

export function addBoxesLayer(YSHIFT = 0) {
  const NUM = 4;

  let x = 0;
  let z = 0;
  const boxes = new Array(NUM * NUM).fill(1).map((_, index) => {
    x++;
    x %= NUM;
    if (index % NUM === 0) {
      z++;
    }

    if (Math.random() > 0.4) {
      return;
    }

    const boxX = x;
    const boxY = STARTING_Y + GAP_SIZE * YSHIFT;
    const boxZ = -z;
    const position = { x: boxX, y: boxY, z: boxZ };
    const box = createAndSetAttributes('a-box', {
      position: position,
      width: BOX_SIZE,
      height: BOX_SIZE,
      depth: BOX_SIZE,
      material: { src: '#rough' },
      'falling-block': {
        delay: Math.random() + YSHIFT,
        x: boxX,
        y: boxY,
        z: boxZ,
        xIndex: x,
        zIndex: z
      },
      'dynamic-body': {
        shape: 'box',
        mass: 10,
        angularDamping: 1,
        linearDamping: 0.9
      },
      color: '#8998ea',
      'block-interact': {}
    });
    return box;
  });

  return boxes;
}

export function addBoxes(scene: Scene) {
  const boxGroup = createAndSetAttributes('a-entity', {
    id: 'boxes',
    position: {
      y: GAP_SIZE / 2,
      x: xShift,
      z: zShift
    }
  });

  const NUM = 5;
  const boxesLayers = new Array(NUM).fill(1).map((_, index) => {
    return addBoxesLayer(index);
  });

  const boxes = [];

  boxesLayers.forEach((boxesLayer) => {
    boxesLayer.forEach((box) => {
      if (box) {
        boxGroup?.appendChild(box);
        boxes.push(box);
      }
    });
  });

  scene?.appendChild(boxGroup);

  return boxGroup;
}
