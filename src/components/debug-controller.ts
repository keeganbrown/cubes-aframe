import AFRAME, { Entity } from 'aframe';

export default AFRAME.registerComponent('debug-controller', {
  isTriggerDown: false,

  schema: {
    enabled: { default: false }
  },

  init: function () {},

  events: {
    buttondown: (event) => {
      console.log({ ...event.detail });
    }
  }
});
