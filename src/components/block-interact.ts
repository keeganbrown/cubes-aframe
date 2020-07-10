import AFRAME, { Entity, ComponentDefinition, THREE } from 'aframe';

interface BlockInteractComponent extends ComponentDefinition {}

enum HAND_ID {
  left = 'leftHand',
  right = 'rightHand'
}

export default AFRAME.registerComponent('block-interact', {
  intersected: false,
  schema: {
    delay: { type: 'number', default: 0 },
    intersectedLeft: { type: 'boolean', default: false },
    intersectedRight: { type: 'boolean', default: false },
    dir: { type: 'vec3', default: new THREE.Vector3() }
  },

  handleRaycast: function (raycastTarget: Entity) {
    console.log({ raycastTarget });
  },

  init: function (props) {
    this.el.addEventListener('raycaster-intersected', (event) => {
      if (event.detail.el.id === HAND_ID.left) {
        this.data.intersectedLeft = true;
      }
      if (event.detail.el.id === HAND_ID.right) {
        this.data.intersectedRight = true;
      }
    });
    this.el.addEventListener('raycaster-intersected-cleared', (event) => {
      if (event.detail.el.id === HAND_ID.left) {
        this.data.intersectedLeft = false;
      }
      if (event.detail.el.id === HAND_ID.right) {
        this.data.intersectedRight = false;
      }
    });

    const comp = this;
    this.el.sceneEl.addEventListener('triggerdown', (event) => {
      if (
        (event.target.id === HAND_ID.left && comp.data.intersectedLeft) ||
        (event.target.id === HAND_ID.right && comp.data.intersectedRight)
      ) {
        comp.data.dir.set(0, 0, 1);
        comp.data.dir.applyQuaternion(event.target.object3D.quaternion);

        comp.el.setAttribute('color', '#990000');
        comp.data.intersectedLeft = false;
        comp.data.intersectedRight = false;

        comp.el.emit('pushed', { dir: comp.data.dir });
      }
    });
  }
} as BlockInteractComponent);
