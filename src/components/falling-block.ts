import AFRAME from 'aframe';
import { FallingBlockSystem } from '../systems/falling-block';

export default AFRAME.registerComponent('falling-block', {
  schema: {
    delay: { type: 'number', default: 0 },
    xIndex: { type: 'number', default: 0 },
    zIndex: { type: 'number', default: 0 },
    x: { type: 'number', default: 0 },
    y: { type: 'number', default: 0 },
    z: { type: 'number', default: 0 },
    yVelocity: { type: 'number', default: 0 }
  },
  init: function () {
    if (this.system) {
      <FallingBlockSystem>this.system.registerMe(this, this.data);
    }
  },
  tick: function (time, timeDelta) {}
});
