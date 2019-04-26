let body = document.getElementById("gamespace");

class UltimateTagApp {
    constructor() {
        this.assigned_it = false;
        this.assigned_notIt = false;

        this.player1 = new Player(this.assignRoles());
        this.player2 = new Player(this.assignRoles());
        this.timer = new Timer("game_timer");

        this.powerUps = [];
        this.powerUp_counter = 0;
        this.numPowerUp = 0;

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
        window.addEventListener('keyup', () => {
            if(event.key == 'ArrowDown') {
                this.player1.Dspeed = 0;
            }else if (event.key == 'ArrowUp') {
                this.player1.Uspeed = 0;
            }else if (event.key == 'ArrowLeft') {
                this.player1.Lspeed = 0;
            }else if (event.key == 'ArrowRight') {
                this.player1.Rspeed = 0;
            }
        });
        window.addEventListener('keyup', () => {
            if(event.key == 's') {
                this.player2.Dspeed = 0;
            }else if (event.key == 'w') {
                this.player2.Uspeed = 0;
            }else if (event.key == 'a') {
                this.player2.Lspeed = 0;
            }else if (event.key == 'd') {
                this.player2.Rspeed = 0;
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

    addPowerUp() {
        let pu_type = "";

        let random_num = Math.floor(Math.random() * 2);

        if (random_num == 0) {
            pu_type = "moreSpeed";
        } else {
            pu_type = "invisibility";
        }

        let pu = document.createElement("div");
        pu.className = pu_type;


        pu.id = "powerUp" + this.numPowerUp;


        body.appendChild(pu);
        this.powerUps.push(new PowerUp(pu.id, ));
        this.numPowerUp++;
    }

    initializePowerUps() {
        if (this.powerUp_counter == 500) {
            this.addPowerUp();
            this.powerUp_counter = 0;
        } else {
            this.powerUp_counter++;
        }
    }

    removePowerUp() {
        body.removeChild(this.powerUps[this.powerUp_counter].elem);
        this.powerUp_counter--;
    }
}

class Player {
    constructor(_role) {
        this.xpos = (Math.random() * window.innerWidth);
        this.ypos = (Math.random() * window.innerHeight);
        this.role = _role;
        this.elem = document.getElementById(this.role);

        this.Lspeed = 0;
        this.Rspeed = 0;
        this.Uspeed = 0;
        this.Dspeed = 0;

        this.timer = new Timer("player_timer");
    }

    moveLeft(){
        this.Lspeed = -1;

    }

    moveRight(){
        this.Rspeed = 1;

    }

    moveUp(){
        this.Uspeed = -1;

    }

    moveDown(){
        this.Dspeed = 1;

    }

    moreSpeed(){

    }

    invisibility(){

    }

    render() {
        this.xpos = this.xpos + this.Lspeed + this.Rspeed;
        this.ypos = this.ypos + this.Uspeed + this.Dspeed;
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





class PowerUp {
    constructor(_id, _type) {
        this.xpos = (Math.random() * window.innerWidth);
        this.ypos = (Math.random() * window.innerHeight);
        this.type = _type;
        this.elem = document.getElementById(_id);
        this.elem.style.top = this.ypos + "px";
        this.elem.style.left = this.xpos + "px";
    }
}





let myGame = new UltimateTagApp();

let game_id = setInterval(frame, 10);
function frame(){
    myGame.update();
    myGame.initializePowerUps();
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
