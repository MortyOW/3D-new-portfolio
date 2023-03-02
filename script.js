// Set up the camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 2, 2 ); // update camera position
camera.rotation.set( -Math.PI / 4, 0, 0 ); // update camera rotation

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Set up the scene
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry( 1, 0.1, 0.6 );
const material = new THREE.MeshBasicMaterial( { color: 0x8B4513 } );
const desk = new THREE.Mesh( geometry, material );
desk.position.set( 0, 0, 0 );
scene.add( desk );
const lampGeometry = new THREE.BoxGeometry( 0.1, 0.3, 0.1 );
const lampMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const lamp = new THREE.Mesh( lampGeometry, lampMaterial );
lamp.position.set( -0.4, 0.2, 0.15 );
desk.add( lamp );
const monitorGeometry = new THREE.BoxGeometry( 0.3, 0.2, 0.02 );
const monitorMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const monitor = new THREE.Mesh( monitorGeometry, monitorMaterial );
monitor.position.set( 0, 0.15, 0.3 );
desk.add( monitor );

// Create directional light and ambient light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
directionalLight.position.set( 1, 1, 1 );
scene.add( directionalLight );
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 );
scene.add( ambientLight );

// Add controls to the camera
const controls = new THREE.OrbitControls( camera, renderer.domElement );

// Render the scene
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();
