var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
          
var geometry = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00});

var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );
scene.add(pointLight);
scene.add( cube, cube2);

cube.position.x = 1.5;
cube.position.y = 0;
cube.position.z = 0;

cube2.position.x = 0;
cube2.position.y = 0;
cube2.position.z = 0;
camera.position.z = 10;
            
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
    cube.rotation.x += .01;
    cube.rotation.y += .01;
    cube2.rotation.x += .01;
    cube2.rotation.y += .01;
   
    
}


render();

/*var player;

function init() {
    player = new Snake(0xffffff, 3, -1, "Player 1");
    for(int temp = 0; temp < player.length; temp++){
        
    }
}*/