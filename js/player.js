function Snake(snake_color, orient, direct, snake_name){
    this.length = 5;
    this.body = [];
    /*in the world axis
    1 is positive z
    -1 is negative z
    2 is posotive x
    -2 is negative x
    3 is positive y
    -3 is negative y
    */
    this.orientation = orient;
    this.tempOrientation = null;
    this.direction = direct;
    this.tempDirection = null;
    this.name = snake_name;
    this.color = snake_color;
    this.blocks = [];
}