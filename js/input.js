function Input(snake_player) {
    snake_player.tempDirection = snake_player.direction;
    snake_player.tempOrientation = snake_player.orientation;
    Input.onkeydown = function(n) {
        switch (n.keyCode){
        //case 37:
        case 65: //left //orientation stays the same
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
        case 87://up
            snake_player.direction = snake_player.tempOrientation;
            snake_player.orientation = -1 * snake_player.tempDirection;
            break;
        //case 39:
        case 68://right
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
        case 83: //down
            snake_player.direction = -1 * snake_player.tempOrientation;
            snake_player.orientation = snake_player.tempDirection;
        
        }
    }
    
}
