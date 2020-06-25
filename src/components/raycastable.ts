import AFRAME from 'aframe';

export default AFRAME.registerComponent('raycastable', {
  schema: {
    delay: { type: 'number', default: 0 },
  },
  init: function (props) {
    console.log(this.el.object3D);
    this.el.addEventListener('click', (e) => {
      console.log('raycastable click', e);
    });
  },
});
