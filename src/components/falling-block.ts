import AFRAME from 'aframe';
import { FallingBlockSystem } from '../systems/falling-block';

export default AFRAME.registerComponent('falling-block', {
  dependencies: ['position', 'width', 'height', 'depth', 'material'],
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
    const mesh = this.el.object3D.children[0];
    console.log(mesh);
  },
  tick: function (time, timeDelta) {
    // if (!mesh.material.bumpMap) {
    //   console.log(mesh.material);
    //   mesh.material.bumpMap = mesh.material.map;
    //   mesh.material.bumpScale = 0.01;
    //   mesh.material.map = null;
    // }
  }
});
