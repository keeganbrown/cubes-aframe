import { Scene, Entity } from 'aframe';
import { createAndSetAttributes } from './helpers';

export function addSky(scene: Scene) {
  const mainSky = createAndSetAttributes('a-sphere', {
    radius: 300,
    material: { color: '#a4a4a4', side: 'back' },
  });
  scene?.appendChild(mainSky);
  return mainSky;
}
