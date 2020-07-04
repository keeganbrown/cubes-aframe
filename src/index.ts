import './polyfill';
import { Scene } from 'aframe';
import './components/';
import './systems/';
import { addBoxes, addFloor, addSky, addGrid } from './constructors/index';

function init() {
  console.log({ PRODUCTION });
  const scene = document.getElementById('scene') as Scene;
  addSky(scene);
  addFloor(scene);
  addBoxes(scene);
  addGrid(scene);
}

window.onload = () => {
  init();
};
