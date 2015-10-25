var player = {};
var apples = [];
var apple_cubes =[];
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
          
var geometry = new THREE.BoxGeometry( .8, .8, .8 );
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00});
var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000});
var scale = 10;
var a = 1*scale;
var b = 1*scale;
var c = -1*scale;//1 1 -1
var Vector_1 = new THREE.Vector3(a,b,c);
camera.lookAt(Vector_1);
scene.add(pointLight);

var size = 100;
camera.position.x = -a;
camera.position.y = -b;
camera.position.z = -c;

var temp_time_fix = 0;

function apple_drop(a){
    for (var i = 0; i < a; i++){
        apples.push({x:Math.round(size*Math.random()), y:Math.round(size*Math.random()), z:Math.round(size*Math.random())});
    }
}




function init() {
    player = new Snake(0xffffff, 3, -1, "Player 1");
    for(var temp = 0; temp < player.length; temp++){
        player.body.push({x:0, y:0, z: -temp});
    }
    for(var temp2 = 0; temp2 < player.length; temp2++){
        player.blocks.push(new THREE.Mesh( geometry, material ));
        player.blocks[temp2].position.x = player.body[temp2].x;
        player.blocks[temp2].position.y = player.body[temp2].y;
        player.blocks[temp2].position.z = player.body[temp2].z;
        scene.add(player.blocks[temp2]);
    }
    apple_drop(4);
    for (var i = 0; i < 4; i++){
        apple_cubes.push(new THREE.Mesh( geometry, material2));
        apple_cubes[i].position.x = apples[i].x;
        apple_cubes[i].position.y = apples[i].y;
        apple_cubes[i].position.z = apples[i].z;
        scene.add(apple_cubes[i]);
    }
}

init(); 


function render() {
    requestAnimationFrame( render );
    temp_time_fix += 1;
    Input(player);
    if (temp_time_fix%10 == 0){
        
    update(player);}
	renderer.render( scene, camera );
}

render();


var food = true;
function update(snake_name){
    var temp_x = snake_name.body[snake_name.length-1].x;
    var temp_y = snake_name.body[snake_name.length-1].y;
    var temp_z = snake_name.body[snake_name.length-1].z;
    //console.log("temp-x: "+ temp_x + "   temp-y: " + temp_y + "  temp-z: " + temp_z);
    switch(snake_name.direction) {
        case 1:
            snake_name.body.push({x:temp_x, y:temp_y, z:(temp_z+1)});
            break;
        case 2:
            snake_name.body.push({x:(temp_x+1), y:temp_y, z:temp_z});
            break;
        case 3:
            snake_name.body.push({x:temp_x, y:(temp_y+1), z:temp_z});
            break;
        case -1:
            snake_name.body.push({x:temp_x, y:temp_y, z:(temp_z-1)});
            break;
        case -2:
            snake_name.body.push({x:(temp_x-1), y:temp_y, z:temp_z});
            break;
        case -3:
            snake_name.body.push({x:temp_x, y:(temp_y-1), z:temp_z});
            break;
    }
    scene.remove(snake_name.blocks[0]);
    eat(snake_name);
    if(food){
        snake_name.body.shift();
        snake_name.blocks.shift();
        snake_name.blocks.push(new THREE.Mesh( geometry, material ));
        snake_name.blocks[snake_name.length-1].position.x = player.body[snake_name.length-1].x;
        snake_name.blocks[snake_name.length-1].position.y = player.body[snake_name.length-1].y;
        snake_name.blocks[snake_name.length-1].position.z = player.body[snake_name.length-1].z;
        scene.add(snake_name.blocks[snake_name.length-1]);
    }
    else {
        snake_name.length += 1;
        snake_name.blocks.push(new THREE.Mesh( geometry, material ));
        snake_name.blocks[snake_name.length].position.x = player.body[snake_name.length].x;
        snake_name.blocks[snake_name.length].position.y = player.body[snake_name.length].y;
        snake_name.blocks[snake_name.length].position.z = player.body[snake_name.length].z;
        scene.add(snake_name.blocks[snake_name.length]);
        food = true;
    }
    //console.log("x:" + snake_name.body[0].x + "   y:" + snake_name.body[0].y + "  z:" + snake_name.body[0].z + "   direction:" + snake_name.direction + "   orientation:" + snake_name.orientation);
    
    camera.position.x = snake_name.body[snake_name.length-1].x - a;
    camera.position.y = snake_name.body[snake_name.length-1].y - b;
    camera.position.z = snake_name.body[snake_name.length-1].z - c;
}

function eat(snake_name){
    for(var j = 0; j < 4; j++){
    if (snake_name.body[snake_name.length-1].x == apples[j].x && snake_name.body[snake_name.length-1].y == apples[j].y && snake_name.body[snake_name.length-1].z == apples[j].z){
        food = false;
        apples.push({x:Math.round(size*Math.random()), y:Math.round(size*Math.random()), z:Math.round(size*Math.random())});
        scene.remove(apple_cubes[j]);
        apples.splice(j,1);
        apple_cubes.splice(j,1);
        apple_cubes.push(new THREE.Mesh( geometry, material2));
        apple_cubes[4].position.x = apples[4].x;
        apple_cubes[4].position.y = apples[4].y;
        apple_cubes[4].position.z = apples[4].z;
        scene.add(apple_cubes[4]);
    }}
}






