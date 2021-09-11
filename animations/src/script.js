import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

let time = Date.now()

// Animation
const tick = () => {
    const currentTime = Date.now()
    const deltaTime = currentTime - time

    mesh.position.x += 0.00001 * deltaTime;
    mesh.position.y += 0.00001 * deltaTime;
    mesh.position.z += 0.00001 * deltaTime;
    camera.lookAt(mesh.position)

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()