import AFRAME from 'aframe';

export default AFRAME.registerComponent('raycastable', {
  schema: {
    delay: { type: 'number', default: 0 },
  },

  handleRaycast: function (event) {
    console.log(event.target);
    event.target.body.position.y = 10;
  },

  init: function (props) {
    this.el.addEventListener('click', this.handleRaycast.bind(this));
  },
});
