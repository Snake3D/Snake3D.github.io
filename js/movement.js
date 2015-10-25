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