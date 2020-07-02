import './polyfill';
import { Scene } from 'aframe';
import './components/';
import './systems/';
import { addBoxes, addFloor, addSky, addGrid } from './constructors/index';

function init() {
  const scene = document.getElementById('scene') as Scene;
  addSky(scene);
  addFloor(scene);
  addBoxes(scene);
  addGrid(scene);
}

window.onload = () => {
  init();
};
