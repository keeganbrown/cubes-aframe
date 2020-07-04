import AFRAME, { Entity, SystemDefinition, ComponentDefinition } from 'aframe';

export interface FallingBlockSystem extends SystemDefinition {
  entities: any[];
}

let entitiyCount = 0;

export default AFRAME.registerSystem('falling-block', <FallingBlockSystem>{
  entities: [],
  init: function () {},

  registerMe: function (comp) {
    this.entities.push(comp);
    // @ts-ignore
    setTimeout(() => {
      console.log(comp.el.body);
    }, 100);
  },

  unregisterMe: function (comp) {
    var index = this.entities.indexOf(comp);
    this.entities.splice(index, 1);
  },

  tick: function (time: number, timeDelta: number) {
    // this.el.object3D.position.y =
    //   Math.sin((time + this.data.delay * 1000) / 500) + 1.5;
  },
});
