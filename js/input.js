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
                    break;
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
                    break;
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
                    break;
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
                    break;
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
                    break;
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
            snake_player.direction = snake_player.tempOrientation;
            snake_player.orientation = -1 * snake_player.tempDirection;
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
                    break;
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
                    break;
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
                    break;
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
                    break;
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
                    break;
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
            snake_player.direction = -1 * snake_player.tempOrientation;
            snake_player.orientation = snake_player.tempDirection;
            break;
        
        }
    });
}