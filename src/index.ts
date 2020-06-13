import './polyfill';
import { Entity, Scene } from 'aframe';
import './components/auto-enter-vr';
import './components/falling-block';
import { addBoxes, addFloor, addSky } from './constructors/index';

function init() {
  const scene = document.getElementById('scene') as Scene;
  addSky(scene);
  addFloor(scene);
  addBoxes(scene);
}

window.onload = () => {
  init();
};
