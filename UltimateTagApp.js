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






class Timer {
    constructor() {
        this.time = 60;
        this.display = document.getElementById("timer");
        this.timerID;
    }

    startTime() {
        let start = new Date();

        function updateTime() {
            let now = new Date();
            let timeLeft = 60 - ((now.getTime() - start.getTime())/1000);
            timeLeft = Math.ceil(timeLeft);
            console.log(timeLeft);
        }

        updateTime();
        this.timerID = setInterval(updateTime, 1000);
    }

    stopTime() {
        clearInterval(this.timerID);
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
