import AFRAME from 'aframe';
import { FallingBlockSystem } from '../systems/falling-block';

export default AFRAME.registerComponent('falling-block', {
  schema: {
    delay: { type: 'number', default: 0 },
  },
  init: function (props) {
    if (this.system) {
      <FallingBlockSystem>this.system.registerMe(this.el);
    }
    console.log(this);
  },
  tick: function (time, timeDelta) {
    // this.el.object3D.position.y =
    //   Math.sin((time + this.data.delay * 1000) / 500) + 1.5;
  },
});
