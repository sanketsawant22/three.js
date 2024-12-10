import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "white", wireframe: true, side: THREE.DoubleSide});
const box = new THREE.Mesh(geometry, material);


scene.add(box);

camera.position.z = 5;
// camera.position.y = 2;

const canvas = document.querySelector("canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.inner);
});

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.enableZoom= true;

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  controls.update();
}

animate();