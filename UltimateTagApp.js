
class UltimateTagApp {
    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.Scoreboard = new Scoreboard();
        window.addEventListener('keydown', () => {
            if(event.key == 'ArrowDown') {
                this.player1.moveDown();
            }else if (event.key == 'ArrowUp') {
                this.player1.moveUp();
            }else if (event.key == 'ArrowLeft') {
                this.player1.moveLeft();
            }else if (event.key == 'ArrowRight') {
                this.player1.moveRight();
            }});
        window.addEventListener('keydown', () => {
            if(event.key == 's') {
                this.player2.moveDown();
            }else if (event.key == 'w') {
                this.player2.moveUp();
            }else if (event.key == 'a') {
                this.player2.moveLeft();
            }else if (event.key == 'd') {
                this.player2.moveRight();
            }});


    }

    update() {
        this.player1.render();
        this.player2.render();
    }

    assignRoles(){

    }

}




class Player {
    constructor() {
        this.xpos = (Math.random() * window.innerWidth);
        this.ypos = (Math.random() * window.innerHeight);
        this.color = "green";
        this.id = "player";
        this.elem = document.getElementById("player");
    }

    moveLeft(){
        document.write("Player Moved left.")
    }

    moveRight(){
        document.write("Player Moved right.")
    }

    moveUp(){
        document.write("Player Moved up.")
    }

    moveDown(){
        document.write("Player Moved Down.")

    }

    render() {
        this.elem.style.top = this.ypos + "px";
        this.elem.style.left = this.xpos + "px";
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
            let timeLeft = this.time - ((now.getTime() - start.getTime())/1000);
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





class PowerUps {
    constructor() {
        this.color = "green";
    }

    moreSpeed(){

    }

    invisibility(){

    }
}

let myGame = new UltimateTagApp();

let id = setInterval(frames, 10);

function frames(){
    myGame.update();
}
