import AFRAME from 'aframe';

export default AFRAME.registerComponent('falling-block', {
  schema: {
    delay: { type: 'number', default: 0 },
  },
  init: function (props) {
    // console.log(this.el.object3D);
  },
  tick: function (time, timeDelta) {
    // this.el.object3D.position.y =
    //   Math.sin((time + this.data.delay * 1000) / 500) + 1.5;
  },
});
