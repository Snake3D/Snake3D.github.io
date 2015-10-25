
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
          
var geometry = new THREE.BoxGeometry( .9, .9, .9 );
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00});

/*var Vector_1 = new THREE.Vector3(-1,1,1);
camera.lookAt(Vector_1);
scene.add(pointLight);


camera.position.x = 10;
camera.position.y = -10;
camera.position.z = -10;*/

camera.position.z = 10;

var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

cube.position.x = 0;
cube.position.y = 0;
cube.position.z = 0;
            
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
    cube.position.x += .01;
}


render();
