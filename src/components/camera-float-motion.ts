import AFRAME, { ComponentDefinition, Entity, THREE } from 'aframe';
import { assocPath, path } from 'ramda';

interface SpecialComponent extends ComponentDefinition {
  delta: number;
  camera: THREE.Object3D | undefined | null;
  rig: THREE.Object3D | undefined | null;
  direction: THREE.Quaternion;
  normal: THREE.Vector3;
  onDrive: Function;
}

export default AFRAME.registerComponent('camera-float-motion', {
  delta: 0.05,
  camera: null,
  rig: null,
  normal: new THREE.Vector3(0, 0, -1),
  direction: new THREE.Quaternion(),

  init() {
    this.camera = this.el?.object3D as THREE.Object3D;
    this.rig = this.camera?.parent as THREE.Object3D;

    this.el?.sceneEl?.addEventListener('mousedown', this.onDrive.bind(this));
    this.el?.sceneEl?.addEventListener('triggerdown', this.onDrive.bind(this));
  },

  onDrive(event: CustomEvent) {
    this.delta = 0.05;
    // const test1 = new THREE.Vector3();
    // const test2 = new THREE.Vector3();
    // this.direction = this.camera?.getWorldDirection();
    this.normal.set(0, 0, 1);
    this.normal.applyQuaternion(this.camera?.quaternion as THREE.Quaternion);
    console.log({
      c: this.camera,
      n: this.normal,
    });
  },

  tick() {
    if (this.delta > 0.00001) {
      this.delta *= 0.9;

      this.rig?.position?.addScaledVector(this.normal, -this.delta);
    }
  },
} as SpecialComponent);
