class UltimateTagApp {
    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.Scoreboard = new Scoreboard();

    }

    movePlayer(){

    }

    assignRoles(){

    }
}




class Player {
    constructor(_xpos, _ypos, _color, _it) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.color = _color;
        this.it = _it;
    }
}





class Scoreboard {
    constructor() {
        this.timer = new Timer();
        this.score = 0;
    }

    updateScore(){

    }
}





class Obstacles {
    constructor(_color) {
        this.color = _color;
    }

    slowPlayer(){

    }

    fasterEnemies(){

    }

}





class PowerUps() {
    constructor() {
        this.color = "green";
    }

    moreSpeed(){

    }

    invisibility(){

    }
}




class Timer(){
    constructor(){
        this.time = 0;
    }

    upDateTime(){

    }

    getTime(){

    }
}
