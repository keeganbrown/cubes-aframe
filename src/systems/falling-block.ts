import AFRAME, { Entity, SystemDefinition } from 'aframe';

export interface FallingBlockSystem extends SystemDefinition {
  entities: Entity[];
}

let entitiyCount = 0;

export default AFRAME.registerSystem('falling-block', <FallingBlockSystem>{
  entities: [],
  init: function () {},

  registerMe: function (el: Entity) {
    this.entities.push(el);
  },

  unregisterMe: function (el: Entity) {
    var index = this.entities.indexOf(el);
    this.entities.splice(index, 1);
  },

  tick: function (time: number, timeDelta: number) {
    // this.el.object3D.position.y =
    //   Math.sin((time + this.data.delay * 1000) / 500) + 1.5;
  },
});
