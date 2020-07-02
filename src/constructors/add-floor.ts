import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

export function addFloor(scene: Scene) {
  const plane = createAndSetAttributes('a-plane', {
    position: { x: 0, y: 0, z: -4 },
    rotation: { x: -90, y: 0, z: 0 },
    width: 20,
    height: 20,
    color: '#365241',
    'static-body': {},
  });

  scene?.appendChild(plane);

  return plane;
}
