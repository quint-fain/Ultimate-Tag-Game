class UltimateTagApp {
    constructor() {
        this.assigned_it = false;
        this.assigned_notIt = false;

        this.player1 = new Player(this.assignRoles());
        this.player2 = new Player(this.assignRoles());
        this.timer = new Timer("game_timer");

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

        document.getElementById("game_timer").textContent = this.timer.timeLeft;
        document.getElementById("player1_timer").textContent = this.player1.timer.timeEllapsed;
        document.getElementById("player2_timer").textContent = this.player2.timer.timeEllapsed;
    }
}





class Player {
    constructor(_role) {
        this.xpos = Math.floor(Math.random() * window.innerWidth);
        this.ypos = Math.floor(Math.random() * window.innerHeight);
        this.role = _role;
        this.elem = document.getElementById(this.role);

        this.xspeed = 0;
        this.yspeed = 0;

        this.timer = new Timer("player_timer");
    }

    moveLeft(){
        this.xspeed = -1;
    }

    moveRight(){
        this.xspeed = 1;
    }

    moveUp(){
        this.yspeed = -1;
    }

    moveDown(){
        this.yspeed = 1;
    }

    render() {
        this.xpos = this.xpos + this.xspeed;
        this.ypos = this.ypos + this.yspeed;
        this.elem.style.left = this.xpos + "px";
        this.elem.style.top = this.ypos + "px";
    }
}





/*
class Scoreboard {
    constructor() {
        this.timer = new Timer();
        this.score = 0;
    }

    updateScore(){

    }
}
*/





class Timer {
    constructor(_id) {
        this.id = _id;
        this.elem = document.getElementById(this.id);
        this.timeLeft = 61
        this.timeEllapsed = -1;
    }

    countdown() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
            console.log(this.timeLeft);
        } else {
            clearInterval(timer_id);
            //this will be where the whole game should reset/winner should be displayed on the screen
        }
    }

    countup() {
        this.timeEllapsed++;
        console.log(this.timeEllapsed);
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
    if (myGame.player1.role == "it") {
        myGame.player1.timer.countup();
    } else {
        myGame.player2.timer.countup();
    }
    myGame.timer.countdown();
}
