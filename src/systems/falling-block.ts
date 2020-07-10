import AFRAME, { Entity, SystemDefinition, ComponentDefinition } from 'aframe';

const range = (NUM) => new Array(NUM).fill(1).map((_, index) => index);

const gridKey = (x, z) => `${x},${z}`;

const entityGridMap = range(5).reduce((acc, x) => {
  range(5).forEach((z) => {
    acc[gridKey(x, z)] = [];
  });
  return acc;
}, {});

const getGridMapSlot = (x: number, z: number) => {
  return entityGridMap[gridKey(x, z)];
};

export interface FallingBlockSystem extends SystemDefinition {
  entities: any[];
  waveClock: number;
  moveClock: number;
}

const WAVE_INC = 15;
const MOVE_INC = 1;
const TICK = 0.1;

export default AFRAME.registerSystem('falling-block', <FallingBlockSystem>{
  entities: [],
  targetY: [],
  waveClock: WAVE_INC,
  moveClock: MOVE_INC,

  init: function () {
    console.log('init falling-block system');
    document.addEventListener('keydown', (event) => {
      console.log('keydown');
      if (event.key === 'f') {
        this.waveClock = MOVE_INC;
      }
    });
  },

  registerMe: function (comp, props) {
    this.entities.push(comp);
    this.targetY.push(props.y);
  },

  unregisterMe: function (comp) {
    var index = this.entities.indexOf(comp);
    this.entities.splice(index, 1);
  },

  tick: function (time: number, timeDelta: number) {
    this.waveClock = this.waveClock - TICK;
    if (this.waveClock < 0) {
      this.moveClock = MOVE_INC;
      this.waveClock = WAVE_INC;
      this.entities.forEach((comp, index) => {
        const gridMapSlot = getGridMapSlot(comp.data.xIndex, comp.data.zIndex);
        if (gridMapSlot.includes(comp)) {
          return;
        }
        if (comp.el.object3D.position.y - gridMapSlot.length <= 0) {
          gridMapSlot.push(comp);
          return;
        }

        this.targetY[index] = this.targetY[index] - 1;
      });

      return;
    }

    if (this.moveClock > 0) {
      this.moveClock = this.moveClock - 0.1;
      this.entities.forEach((comp, index) => {
        const yTarget = this.targetY[index];
        if (comp.el.object3D.position.y - yTarget > 0.01) {
          comp.el.object3D.position.y -= 0.1;
        } else {
          comp.el.object3D.position.y = yTarget;
        }
      });
    }

    // this.el.object3D.position.y =
    //   Math.sin((time + this.data.delay * 1000) / 500) + 1.5;
  }
});
