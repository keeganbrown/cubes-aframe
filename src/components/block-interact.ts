import AFRAME, { Entity, ComponentDefinition, THREE } from 'aframe';

interface BlockInteractComponent extends ComponentDefinition {
  intersected: boolean;
  dir: THREE.Vector3;
}

export default AFRAME.registerComponent('block-interact', {
  intersected: false,
  dir: new THREE.Vector3(),
  schema: {
    delay: { type: 'number', default: 0 }
  },

  handleRaycast: function (raycastTarget: Entity) {
    console.log({ raycastTarget });
  },

  init: function (props) {
    this.el.addEventListener('raycaster-intersected', (event) => {
      this.intersected = true;
    });
    this.el.addEventListener('raycaster-intersected-cleared', (event) => {
      this.intersected = false;
    });
    this.el.addEventListener('triggerdown', (event) => {
      console.log({ trigger: event });
      // if (this.intersected) {
      //   this.dir.subVectors( v2, v1 ).normalize();
      // }
    });
  }
} as BlockInteractComponent);
