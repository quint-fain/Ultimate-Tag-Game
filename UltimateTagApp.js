
class UltimateTagApp {
    constructor() {
        this.assigned_it = false;
        this.assigned_notIt = false;

        this.player1 = new Player("player1", this.assignRoles());
        this.player2 = new Player("player2", this.assignRoles());
        this.scoreboard = new Scoreboard();

        window.addEventListener('keydown', () => {
            if(event.key == 'ArrowDown') {
                this.player1.moveDown();
            }else if (event.key == 'ArrowUp') {
                this.player1.moveUp();
            }else if (event.key == 'ArrowLeft') {
                this.player1.moveLeft();
            }else if (event.key == 'ArrowRight') {
                this.player1.moveRight();
            }
        });
        window.addEventListener('keydown', () => {
            if(event.key == 's') {
                this.player2.moveDown();
            }else if (event.key == 'w') {
                this.player2.moveUp();
            }else if (event.key == 'a') {
                this.player2.moveLeft();
            }else if (event.key == 'd') {
                this.player2.moveRight();
            }
        });
    }

    assignRoles(){
        let randNum = Math.floor(Math.random() * 2);

        let role = "";

        if (randNum == 0 && this.assigned_it == false) {
            role = "it";
            this.assigned_it = true;
        } else if (this.assigned_notIt == false) {
            role = "notIt";
            this.assigned_notIt = true;
        } else {
            role = "it";
        }

        return role;
    }

    update() {
        this.player1.render();
        this.player2.render();
    }

}




class Player {
    constructor(_id, _role) {
        this.xpos = Math.floor(Math.random() * window.innerWidth);
        this.ypos = Math.floor(Math.random() * window.innerHeight);
        this.color = "green";
        this.id = _id;
        this.elem = document.getElementById(this.id);

        this.role = _role;
    }

    moveLeft(){
        console.log("Player Moved left.")
    }

    moveRight(){
        console.log("Player Moved right.")
    }

    moveUp(){
        console.log("Player Moved up.")
    }

    moveDown(){
        console.log("Player Moved Down.")
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
        this.time = 61;
        this.display = document.getElementById("timer");
        this.start = new Date();
        this.timeLeft = 61
    }

    updateTime() {
        if (this.timeLeft > 0) {
            let now = new Date();
            this.timeLeft = this.time - ((now.getTime() - this.start.getTime())/1000);
            this.timeLeft = Math.ceil(this.timeLeft);
            console.log(this.timeLeft);
        } else {
            clearInterval(timer_id);
        }
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

let game_id = setInterval(frame, 10);
function frame(){
    myGame.update();
}

let timer_id = setInterval(timer_frame, 1000);
function timer_frame() {
    myGame.scoreboard.timer.updateTime();
}
