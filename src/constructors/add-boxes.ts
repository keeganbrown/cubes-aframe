import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

export function addBoxes(scene: Scene) {
  const NUM = 4;
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
      position: { x: x + xShift, y: 0.3, z: -z + zShift },
      width: 0.75,
      height: 0.75,
      depth: 0.75,
      'falling-block': { delay: Math.random() },
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
