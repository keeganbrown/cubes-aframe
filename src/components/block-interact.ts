import AFRAME, { Entity } from 'aframe';

export default AFRAME.registerComponent('block-interact', {
  schema: {
    delay: { type: 'number', default: 0 }
  },

  handleRaycast: function (raycastTarget: Entity) {
    console.log({ raycastTarget });
  },

  init: function (props) {
    this.el.addEventListener('click', (event) => {
      this.handleRaycast(this.el);
    });
  }
});
