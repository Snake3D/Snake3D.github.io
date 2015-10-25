function update(snake_name){
    temp_x = snake_name.body[snake_name.length].x;
    temp_y = snake_name.body[snake_name.length].y;
    temp_z = snake_name.body[snake_name.length].z;
    
    switch(snake_name.direction) {
        case 1:
            snake_name.body.push({x:temp_x, y:temp_y, z:(temp_z+1)})
        case 2:
            snake_name.body.push({x:(temp_x+1), y:temp_y, z:temp_z})
        case 3:
            snake_name.body.push({x:temp_x, y:(temp_y+1), z:temp_z})
        case -1:
            snake_name.body.push({x:temp_x, y:temp_y, z:(temp_z-1)})
        case -2:
            snake_name.body.push({x:(temp_x-1), y:temp_y, z:temp_z})
        case -3:
            snake_name.body.push({x:temp_x, y:(temp_y-1), z:temp_z})
    }
    snake_name.body.pop();
    snake_name.blocks.pop();
    snake_name.blocks.push(new THREE.Mesh( geometry, material ));
    snake_name.blocks[snake_name.length-1].position.x = player.body[snake_name.length-1].x;
    snake_name.blocks[snake_name.length-1].position.y = player.body[snake_name.length-1].y;
    snake_name.blocks[snake_name.length-1].position.z = player.body[snake_name.length-1].z;
    scene.add(player.blocks[snake_name.length-1]);
}

