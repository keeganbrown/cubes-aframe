import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

export function addFloor(scene: Scene) {
  const plane = createAndSetAttributes('a-plane', {
    position: { x: 0, y: 0, z: -4 },
    rotation: { x: -90, y: 0, z: 0 },
    width: 500,
    height: 500,
    color: '#365241',
    material: { shader: 'flat' },
    'static-body': {}
  });

  scene?.appendChild(plane);

  return plane;
}
