import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

function addGridLayer(yAxis = 1) {
  const gridGroup = createAndSetAttributes('a-entity', {
    position: { x: -0.5, y: yAxis, z: 0.5 },
  });

  const NUM = 5;
  let x = 0;
  let z = 0;
  const xShift = -1.5;
  const zShift = -1.5;
  const LENGTH = 0.1;
  const lines = new Array(NUM * NUM).fill(1).map((_, index) => {
    x++;
    x %= NUM;
    if (index % NUM === 0) {
      z++;
    }
    const line1 = createAndSetAttributes('a-entity', {
      position: { x: x + xShift, y: 0, z: -z + zShift },
      line: {
        start: { x: -LENGTH, y: 0, z: 0 },
        end: { x: LENGTH, y: 0, z: 0 },
        color: '#333333',
      },
    });

    const line2 = createAndSetAttributes('a-entity', {
      position: { x: x + xShift, y: 0, z: -z + zShift },
      line: {
        start: { x: 0, y: -LENGTH, z: 0 },
        end: { x: 0, y: LENGTH, z: 0 },
        color: '#333333',
      },
    });

    const line3 = createAndSetAttributes('a-entity', {
      position: `${x + xShift} 0 ${-z + zShift}`,
      line: {
        start: { x: 0, y: 0, z: -LENGTH },
        end: { x: 0, y: 0, z: LENGTH },
        color: '#333333',
      },
    });
    return [line1, line2, line3];
  });

  lines.forEach(([line1, line2, line3]) => {
    gridGroup?.appendChild(line1);
    gridGroup?.appendChild(line2);
    gridGroup?.appendChild(line3);
  });

  return gridGroup;
}

export function addGrid(scene: Scene) {
  const LAYERS = 5;
  const gridLayers = new Array(LAYERS).fill(0).map((_, i) => {
    const gridLayer = addGridLayer(i + 0.1);
    scene?.appendChild(gridLayer);
    return gridLayer;
  });

  return gridLayers;
}
