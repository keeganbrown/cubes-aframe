import AFRAME from 'aframe';

AFRAME.registerComponent('auto-enter-vr', {
  init: function () {
    const enter = this?.el?.sceneEl?.enterVR();
    if (enter) {
      enter.catch(() => {});
    }
  },
});
