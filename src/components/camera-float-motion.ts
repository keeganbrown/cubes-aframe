import AFRAME, { ComponentDefinition, Entity, THREE } from 'aframe';
import { assocPath, path } from 'ramda';

interface SpecialComponent extends ComponentDefinition {
  delta: number;
  camera: THREE.Object3D | undefined | null;
  direction: THREE.Vector3;
  onDrive: Function;
}

export default AFRAME.registerComponent('camera-float-motion', {
  delta: 0.05,
  camera: null,
  direction: new THREE.Vector3(),

  init() {
    this.camera = path(
      ['el', 'object3D', 'children', '0'],
      this
    ) as THREE.Object3D;

    this.el?.sceneEl?.addEventListener('mousedown', this.onDrive.bind(this));
    this.el?.sceneEl?.addEventListener('triggerdown', this.onDrive.bind(this));
  },

  onDrive(event: CustomEvent) {
    console.log({ event, camera: this.camera });
    this.delta = 0.05;
    this.camera?.getWorldDirection(this.direction);
  },

  tick() {
    if (this.delta > 0.00001) {
      this.delta *= 0.9;

      const rig = this.camera?.parent as THREE.Object3D;

      rig.position.addScaledVector(this.direction, this.delta);
    }
  },
} as SpecialComponent);
