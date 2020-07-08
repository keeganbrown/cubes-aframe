import AFRAME, { Entity } from 'aframe';

export default AFRAME.registerComponent('debug-controller', {
  isTriggerDown: false,

  schema: {
    enabled: { default: false }
  },

  init: function () {
    this.el.addEventListener('buttondown', (event) => {
      console.log({ detail: event.detail });
    });
  }
});
