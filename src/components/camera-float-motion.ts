import AFRAME, {
  ComponentDefinition,
  Entity,
  THREE,
  DetailEvent
} from 'aframe';
import { path } from 'ramda';

interface CameraFloatMotionComponent extends ComponentDefinition {
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
  taper: 0.9,
  camera: null,
  rig: null,
  normal: new THREE.Vector3(0, 0, -1),
  direction: new THREE.Quaternion(),

  init() {
    this.camera = this.el?.object3D as THREE.Object3D;
    this.rig = this.camera?.parent as THREE.Object3D;

    this.el?.sceneEl?.addEventListener('buttondown', (buttonDownEvent) => {
      console.log(buttonDownEvent);
    });
    this.el?.sceneEl?.addEventListener('gripup', () => {
      this.taper = 0.8;
    });
    this.el?.sceneEl?.addEventListener('gripdown', this.onDrive.bind(this));
    this.el?.sceneEl?.addEventListener('axismove', this.onSteer.bind(this));
  },

  onDrive(event: DetailEvent<Entity>) {
    if (path(['target', 'components', 'oculus-touch-controls'], event)) {
      this.taper = 1;
      this.delta = 0.02;
      this.normal.set(0, 0, 1);
      this.normal.applyQuaternion(getControllerQuaternion(event));
    }
  },

  onSteer(event) {
    if (this.delta > 0.00001) {
      this.normal.set(0, 0, 1);
      this.normal.applyQuaternion(getControllerQuaternion(event));
    }
  },

  tick() {
    if (this.delta > 0.00001) {
      this.delta *= this.taper;
      this.rig?.position?.addScaledVector(this.normal, -this.delta);
    }
  }
} as CameraFloatMotionComponent);
