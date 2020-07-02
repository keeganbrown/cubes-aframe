import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

export function addBoxes(scene: Scene) {
  const NUM = 4;
  const BOX_SIZE = 0.9;
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
      position: { x: x + xShift, y: 10.3, z: -z + zShift },
      width: BOX_SIZE,
      height: BOX_SIZE,
      depth: BOX_SIZE,
      'falling-block': { delay: Math.random() },
      'dynamic-body': {},
      color: '#8998ea',
      raycastable: {},
    });
    return box;
  });

  boxes.forEach((box) => {
    scene?.appendChild(box);
  });

  return boxes;
}
