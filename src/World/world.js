import { createCamera } from "./components/objects/camera.js";
import { createLights } from "./components/objects/lights.js";
import { createScene } from "./components/objects/scene.js";
import { createRenderer } from "./components/systems/renderer.js";
import { Loop } from "./components/systems/loop.js";
import { Resizer } from "./components/systems/resizer.js";

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    // Instances of camera, scene, and renderer
    camera = createCamera();
    scene = createScene("red");
    renderer = createRenderer();
    // Initialize Loop
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    // Light Instance, with optional light helper
    // eslint-disable-next-line no-unused-vars
    const { light, lightHelper } = createLights("white");
    loop.updatables.push(light);
    scene.add(light);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }
  render() {
    // Draw a single frame
    renderer.render(scene, camera);
  }
  // Animation handlers
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
}
export { World };
