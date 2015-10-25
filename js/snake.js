var player = {};
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
          
var geometry = new THREE.BoxGeometry( .9, .9, .9 );
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00});

var Vector_1 = new THREE.Vector3(-1,1,1);
camera.lookAt(Vector_1);
scene.add(pointLight);


camera.position.x = 10;
camera.position.y = -10;
camera.position.z = -10;

var temp_time_fix = 0;







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
}

init(); 


function render() {
    requestAnimationFrame( render );
    temp_time_fix += 1;
    Input(player);
    if (temp_time_fix%30 == 0){
        
    update(player);}
	renderer.render( scene, camera );
}

render();


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
    snake_name.body.shift();
    snake_name.blocks.shift();
    snake_name.blocks.push(new THREE.Mesh( geometry, material ));
    snake_name.blocks[snake_name.length-1].position.x = player.body[snake_name.length-1].x;
    snake_name.blocks[snake_name.length-1].position.y = player.body[snake_name.length-1].y;
    snake_name.blocks[snake_name.length-1].position.z = player.body[snake_name.length-1].z;
    scene.add(snake_name.blocks[snake_name.length-1]);
    //console.log("x:" + snake_name.body[0].x + "   y:" + snake_name.body[0].y + "  z:" + snake_name.body[0].z + "   direction:" + snake_name.direction);
}





function Input(snake_player) {
    
    snake_player.tempDirection = snake_player.direction;
    snake_player.tempOrientation = snake_player.orientation;
    
    document.addEventListener('keypress', function(n) {
        console.log(n.keyCode);
        switch (n.keyCode){
        //case 37:
        case 97: //left //orientation stays the same
                
            switch (snake_player.tempDirection) {
                case 1:
                    switch(snake_player.tempOrientation){
                        case 3:
                            snake_player.direction = 2;
                            break;
                        case -3:
                            snake_player.direction = -2;
                            break;
                        case -2:
                            snake_player.direction = 3;
                            break;
                        case 2:
                            snake_player.direction = -3;
                            break;
                    }//done
                case -2:
                    switch(snake_player.tempOrientation){
                        case 1:
                            snake_player.direction = -3;
                            break;
                        case -1:
                            snake_player.direction = 3;
                            break;
                        case 3:
                            snake_player.direction = 1;
                            break;
                        case -3:
                            snake_player.direction = -1;
                            break;
                    }//done
                case 3:
                    switch(snake_player.tempOrientation){
                        case -2:
                            snake_player.direction = -1;
                            break;
                        case 2:
                            snake_player.direction = 1;
                            break;
                        case 1:
                            snake_player.direction = -2;
                            break;
                        case -1:
                            snake_player.direction = 2;
                            break;
                    }//done
                case -1:
                    switch(snake_player.tempOrientation){
                        case -2:
                            snake_player.direction = -3;
                            break;
                        case 2:
                            snake_player.direction = 3;
                            break;
                        case 3:
                            snake_player.direction = -2;
                            break;
                        case -3:
                            snake_player.direction = 2;
                            break;
                    }//done
                case 2:
                    switch(snake_player.tempOrientation){
                        case 3:
                            snake_player.direction = -1;
                            break;
                        case -3:
                            snake_player.direction = 1;
                            break;
                        case 1:
                            snake_player.direction = 3;
                            break;
                        case -1:
                            snake_player.direction = -3;
                            break;
                    }
                case -3:
                    switch(snake_player.tempOrientation){
                        case 1:
                            snake_player.direction = 2;
                            break;
                        case -1:
                            snake_player.direction = -2;
                            break;
                        case -2:
                            snake_player.direction = 1;
                            break;
                        case 2:
                            snake_player.direction = -1;
                            break;
                    } 
                    break;
            }
            break;
        //case 38:
        case 119://up
            snake_player.direction = -1 * snake_player.tempOrientation;
            snake_player.orientation = snake_player.tempDirection;
            break;
            
        //case 39:
        case 100://right
                switch (snake_player.tempDirection) {
                case 1:
                    switch(snake_player.tempOrientation){
                        case 3:
                            snake_player.direction = -2;
                            break;
                        case -3:
                            snake_player.direction = 2;
                            break;
                        case -2:
                            snake_player.direction = -3;
                            break;
                        case 2:
                            snake_player.direction = 3;
                            break;
                    }//done
                case -2:
                    switch(snake_player.tempOrientation){
                        case 1:
                            snake_player.direction = 3;
                            break;
                        case -1:
                            snake_player.direction = -3;
                            break;
                        case 3:
                            snake_player.direction = -1;
                            break;
                        case -3:
                            snake_player.direction = 1;
                            break;
                    }//done
                case 3:
                    switch(snake_player.tempOrientation){
                        case -2:
                            snake_player.direction = 1;
                            break;
                        case 2:
                            snake_player.direction = -1;
                            break;
                        case 1:
                            snake_player.direction = 2;
                            break;
                        case -1:
                            snake_player.direction = -2;
                            break;
                    }//done
                case -1:
                    switch(snake_player.tempOrientation){
                        case -2:
                            snake_player.direction = 3;
                            break;
                        case 2:
                            snake_player.direction = -3;
                            break;
                        case 3:
                            snake_player.direction = 2;
                            break;
                        case -3:
                            snake_player.direction = -2;
                            break;
                    }//done
                case 2:
                    switch(snake_player.tempOrientation){
                        case 3:
                            snake_player.direction = 1;
                            break;
                        case -3:
                            snake_player.direction = -1;
                            break;
                        case 1:
                            snake_player.direction = -3;
                            break;
                        case -1:
                            snake_player.direction = 3;
                            break;
                    }
                case -3:
                    switch(snake_player.tempOrientation){
                        case 1:
                            snake_player.direction = -2;
                            break;
                        case -1:
                            snake_player.direction = 2;
                            break;
                        case -2:
                            snake_player.direction = -1;
                            break;
                        case 2  :
                            snake_player.direction = 1;
                            break;
                    } 
                    break;
            }
            break;
        //case 40:
        case 115: //down
            snake_player.direction = snake_player.tempOrientation;
            snake_player.orientation = -1 * snake_player.tempDirection;
        
        }
    });
}
