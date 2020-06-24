import AFRAME from 'aframe';

export default AFRAME.registerComponent('auto-enter-vr', {
  init: function () {
    const enter = this?.el?.sceneEl?.enterVR();
    if (enter) {
      enter.catch(() => {});
    }
  },
});
