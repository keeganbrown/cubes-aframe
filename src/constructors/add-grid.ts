import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

function addGridLayer(yAxis = 1) {
  const gridGroup = createAndSetAttributes('a-entity', {
    position: { x: -0.5, y: yAxis, z: 0.5 }
  });

  const NUM = 5;
  let x = 0;
  let z = 0;
  const xShift = -1.5;
  const zShift = -1.5;
  const LENGTH = 0.05;
  const lineBoxes = new Array(NUM * NUM).fill(1).map((_, index) => {
    x++;
    x %= NUM;
    if (index % NUM === 0) {
      z++;
    }
    const lineBox = createAndSetAttributes('a-entity', {
      position: `${x + xShift} 0 ${-z + zShift}`,
      // 'static-body': { shape: 'box' },
      width: LENGTH * 2,
      height: LENGTH * 2,
      depth: LENGTH * 2
    });

    const line1 = createAndSetAttributes('a-entity', {
      position: { x: 0, y: 0, z: 0 },
      line: {
        start: { x: -LENGTH, y: 0, z: 0 },
        end: { x: LENGTH, y: 0, z: 0 },
        color: '#333333'
      }
    });

    const line2 = createAndSetAttributes('a-entity', {
      position: { x: 0, y: 0, z: 0 },
      line: {
        start: { x: 0, y: -LENGTH, z: 0 },
        end: { x: 0, y: LENGTH, z: 0 },
        color: '#333333'
      }
    });

    const line3 = createAndSetAttributes('a-entity', {
      position: { x: 0, y: 0, z: 0 },
      line: {
        start: { x: 0, y: 0, z: -LENGTH },
        end: { x: 0, y: 0, z: LENGTH },
        color: '#333333'
      }
    });

    lineBox?.appendChild(line1);
    lineBox?.appendChild(line2);
    lineBox?.appendChild(line3);

    return lineBox;
  });

  lineBoxes.forEach((lineBox) => {
    gridGroup?.appendChild(lineBox);
  });

  return gridGroup;
}

export function addGrid(scene: Scene) {
  const LAYERS = 2;
  const fullGrid = createAndSetAttributes('a-entity', {
    'geometry-merger': { preserveOriginal: false }
  });

  const gridLayers = new Array(LAYERS).fill(0).map((_, i) => {
    const gridLayer = addGridLayer(i + 0.1);
    fullGrid?.appendChild(gridLayer);
    return gridLayer;
  });

  scene.appendChild(fullGrid);

  return fullGrid;
}
