




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

    document.appendChild(this.player1);
    document.appendChild(this.player2);
    
    assignRoles(){

    }

    render(){

    }
}




class Player {
    constructor(_xpos, _ypos, _color, _id) {
        this.xpos = Math.random() * window.innerWidth;
        this.ypos = Math.random() * window.innerHeight;
        this.color = black;
        this.id = "player";
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
