import AFRAME, { Entity, Scene } from 'aframe';
import './components/auto-enter-vr';

function createAndSetAttributes(
  elementName: string,
  attributes: object
): Entity {
  const entity = document.createElement(elementName);
  Object.entries(attributes).forEach(([attributeName, data]) => {
    entity.setAttribute(attributeName, data);
  });
  return entity;
}

function addFloor(scene: Scene) {
  const plane = createAndSetAttributes('a-plane', {
    position: { x: 0, y: 0, z: -4 },
    rotation: { x: -90, y: 0, z: 0 },
    width: 10,
    height: 10,
    color: '#365241',
  });

  scene?.appendChild(plane);

  console.log('test', plane, scene);

  return plane;
}

function addBoxes(scene: Scene) {
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
      position: `${x + xShift} 0.3 ${-z + zShift}`,
      width: 0.75,
      height: 0.75,
      depth: 0.75,
      color: '#8998ea',
    });
    return box;
  });

  boxes.forEach((box) => {
    scene?.appendChild(box);
  });

  return boxes;
}

function addGrid(scene: Scene) {
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
    const box = createAndSetAttributes('a-entity', {
      position: `${x + xShift} 0.3 ${-z + zShift}`,
      line: {},
      width: 0.75,
      height: 0.75,
      depth: 0.75,
      color: '#777777',
    });
    return box;
  });

  boxes.forEach((box) => {
    scene?.appendChild(box);
  });

  return boxes;
}

function addSky(scene: Scene) {
  const mainSky = createAndSetAttributes('a-sphere', {
    radius: 300,
    material: { color: '#a4a4a4', side: 'back' },
  });
  scene?.appendChild(mainSky);
  return mainSky;
}

function init() {
  const scene = document.getElementById('scene') as Scene;
  addSky(scene);
  addFloor(scene);
  addBoxes(scene);
}

window.onload = () => {
  init();
};
