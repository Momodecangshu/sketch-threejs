import * as THREE from 'three';

export default class Light extends THREE.DirectionalLight {
  constructor() {
    super(0xffff00, 0.8);
    this.name = 'Light';
    this.position.set(-10, 16, 0);
    this.castShadow = true;
    this.shadow.camera.left = this.shadow.camera.bottom = -10;
    this.shadow.camera.right = this.shadow.camera.top = 10;
    this.time = 0;
    this.isActive = false;
  }
  start() {
    this.isActive = true;
  }
  update(time) {
    if (this.isActive === false) return;
    this.time += time;
  }
}
