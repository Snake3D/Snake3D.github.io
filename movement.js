/*function update(snake_name){
    var temp_x = snake_name.body[snake_name.length-1].x;
    var temp_y = snake_name.body[snake_name.length-1].y;
    var temp_z = snake_name.body[snake_name.length-1].z;
    //console.log("temp-x: "+ temp_x + "   temp-y: " + temp_y + "  temp-z: " + temp_z);
    switch(snake_name.direction) {
        case 1:
            snake_name.body.push({x:temp_x, y:temp_y, z:(temp_z+1)});
            break;
        case 2:
            snake_name.body.push({x:(temp_x-1), y:temp_y, z:temp_z});
            break;
        case 3:
            snake_name.body.push({x:temp_x, y:(temp_y-1), z:temp_z});
            break;
        case -1:
            snake_name.body.push({x:temp_x, y:temp_y, z:(temp_z-1)});
            break;
        case -2:
            snake_name.body.push({x:(temp_x+1), y:temp_y, z:temp_z});
            break;
        case -3:
            snake_name.body.push({x:temp_x, y:(temp_y+1), z:temp_z});
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
}*/