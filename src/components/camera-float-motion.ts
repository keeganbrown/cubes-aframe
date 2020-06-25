import AFRAME, {
  ComponentDefinition,
  Entity,
  THREE,
  DetailEvent,
} from 'aframe';
import { assocPath, path, defaultTo } from 'ramda';

interface SpecialComponent extends ComponentDefinition {
  delta: number;
  camera: THREE.Object3D | undefined | null;
  rig: THREE.Object3D | undefined | null;
  direction: THREE.Quaternion;
  normal: THREE.Vector3;
  onDrive: Function;
}

function getControllerQuaternion(event: DetailEvent<Entity>): THREE.Quaternion {
  return event?.target?.object3D?.quaternion as THREE.Quaternion;
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
    this.el?.sceneEl?.addEventListener('buttondown', this.onDrive.bind(this));
  },

  onDrive(event: DetailEvent<Entity>) {
    if (event.target.components['oculus-touch-controls']) {
      const controllerHeading = getControllerQuaternion(event);
      console.log({ event, controllerHeading });
      // debugger;
      this.delta = 0.05;
      this.normal.set(0, 0, 1);
      this.normal.applyQuaternion(controllerHeading);
    }
  },

  tick() {
    if (this.delta > 0.00001) {
      this.delta *= 0.9;
      this.rig?.position?.addScaledVector(this.normal, -this.delta);
    }
  },
} as SpecialComponent);
