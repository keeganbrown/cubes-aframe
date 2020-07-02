window.AFRAME = require('aframe');
// const Ammo = require('ammo.js/builds/ammo.wasm.js');
// const AmmoWasm = import('ammo.js/builds/ammo.wasm.wasm').then();
// const AmmoDebug = require('ammo-debug-drawer');

// @ts-ignore
window.AFRAME.THREE.AmmoDebugConstants = {
  NoDebug: 0,
  DrawWireframe: 1,
  DrawAabb: 2,
  DrawFeaturesText: 4,
  DrawContactPoints: 8,
  NoDeactivation: 16,
  NoHelpText: 32,
  DrawText: 64,
  ProfileTimings: 128,
  EnableSatComparison: 256,
  DisableBulletLCP: 512,
  EnableCCD: 1024,
  DrawConstraints: 1 << 11, //2048
  DrawConstraintLimits: 1 << 12, //4096
  FastWireframe: 1 << 13, //8192
  DrawNormals: 1 << 14, //16384
  DrawOnTop: 1 << 15, //32768
  MAX_DEBUG_DRAW_MODE: 0xffffffff,
};

// console.log(AmmoDebug);

require('aframe-physics-system');
