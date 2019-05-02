let gamespace = document.getElementById("gamespace");
let gs_dimensions = gamespace.getBoundingClientRect();
let gs_height = gs_dimensions.height;
let gs_width = gs_dimensions.width;
let gs_top = gs_dimensions.top;

class UltimateTagApp {
    constructor() {
        this.assigned_it = false;
        this.assigned_notIt = false;

        this.player1 = new Player(this.assignRoles(), "P1");
        this.player2 = new Player(this.assignRoles(), "P2");
        this.timer = new Timer("game_timer");

        this.collision_bool = false;

        this.powerUps = [];
        this.powerUp_counter = 0;
        this.numPowerUp = this.powerUps.length;

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

    collisionBorder(){
        if (this.player1.xpos >= (gs_width - 51)) {
            this.player1.xpos = (gs_width - 51);
        }
        if (this.player1.xpos <= 0) {
            this.player1.xpos = 0;
        }
        if (this.player1.ypos >= (gs_height + gs_top - 51)) {
            this.player1.ypos = (gs_height + gs_top - 51);
        }
        if (this.player1.ypos <= gs_top) {
            this.player1.ypos = gs_top;
        }
        if (this.player2.xpos >= (gs_width - 51)) {
            this.player2.xpos = (gs_width - 51);
        }
        if (this.player2.xpos <= 0) {
            this.player2.xpos = 0;
        }
        if (this.player2.ypos >= (gs_height + gs_top - 51)) {
            this.player2.ypos = (gs_height + gs_top - 51);
        }
        if (this.player2.ypos <= gs_top) {
            this.player2.ypos = gs_top;
        }

    }

    collisionPlayers(){

        let xd = this.player1.xpos - this.player2.xpos;
        let yd = this.player1.ypos - this.player2.ypos;
        let distanceBtwn = Math.sqrt((xd * xd) + (yd * yd));

        if (distanceBtwn <= this.player1.radius + this.player2.radius){
            if (!this.player1.invincible && !this.player2.invincible) {
                if (this.player1.role == "it" && this.collision_bool == false) {
                    this.player1.role = "notIt";
                    this.player2.role = "it";
                    this.collision_bool = true;
                }else if (this.collision_bool == false){
                    this.player2.role = "notIt";
                    this.player1.role = "it";
                    this.collision_bool = true;
                }
            } else if (this.player1.invincible && !this.player2.invincible) {
                if (this.player1.role == "it" && !this.collision_bool) {
                    this.player1.role = "notIt";
                    this.player2.role = "it";
                    this.collision_bool = true;
                }
            } else if (!this.player1.invincible && this.player2.invincible) {
                if (this.player2.role == "it" && !this.collision_bool) {
                    this.player1.role = "it";
                    this.player2.role = "notIt";
                    this.collision_bool = true;
                }
            }
        } else {
            this.collision_bool = false;
        }
    }



    addPowerUp() {
        let pu_type = "";
        let random_num = Math.floor(Math.random() * 2);

        if (random_num == 0) {
            pu_type = "moreSpeed";
        } else {
            pu_type = "invincible";
        }

        this.powerUps.push(new PowerUp(pu_type));
        gamespace.appendChild(this.powerUps[this.numPowerUp].elem);

        this.numPowerUp = this.powerUps.length;
    }

    initializePowerUps() {
        if (this.powerUp_counter == 500) {
            this.addPowerUp();
            this.powerUp_counter = 0;
        } else {
            this.powerUp_counter++;
        }
    }

    removePowerUp(pu, numPu) {
        gamespace.removeChild(pu.elem);


        //this is the power up in the power up array that was hit by the player
        this.powerUps.splice(numPu, 1);



        this.numPowerUp = this.powerUps.length;
    }



    update() {
        this.player1.render();
        this.player2.render();
        this.collisionPlayers();
        this.collisionBorder();
        document.getElementById("game_timer").textContent = this.timer.timeLeft;
        document.getElementById("player1_timer").textContent = this.player1.timer.timeEllapsed;
        document.getElementById("player2_timer").textContent = this.player2.timer.timeEllapsed;

        //gamespace updating if the window size is changed during the game
        gs_dimensions = gamespace.getBoundingClientRect();
        gs_height = gs_dimensions.height;
        gs_width = gs_dimensions.width;
        gs_top = gs_dimensions.top;
    }
}

class Player {
    constructor(_role, _p) {

        this.xpos = (Math.random() * gs_width);
        this.ypos = (Math.random() * gs_height) + gs_top;
        this.role = _role;

        this.p = document.createElement('div');
        this.p.textContent = _p;
        this.p.className = 'player';
        this.p.id = this.role;

        this.elem = gamespace.appendChild(this.p);

        this.radius = 25;
        this.Lspeed = 0;
        this.Rspeed = 0;
        this.Uspeed = 0;
        this.Dspeed = 0;

        this.timer = new Timer("player_timer");

        this.moreSpeed = false;
        this.invincible = false;
        this.moreSpeedCount = 0;
        this.invincibleCount = 0;
    }

    moveLeft(){
        if (this.moreSpeed) {
            this.Lspeed = -3;
        } else {
            this.Lspeed = -1;
        }
    }

    moveRight(){
        if (this.moreSpeed) {
            this.Rspeed = 3;
        } else {
            this.Rspeed = 1;
        }
    }

    moveUp(){
        if (this.moreSpeed) {
            this.Uspeed = -3;
        } else {
            this.Uspeed = -1;
        }

    }

    moveDown(){
        if (this.moreSpeed) {
            this.Dspeed = 3;
        } else {
            this.Dspeed = 1;
        }

    }

    collisionPowerUps() {
        for (var i = 0; i < myGame.numPowerUp; i++) {
            let xd = this.xpos - myGame.powerUps[i].xpos;
            let yd = this.ypos - myGame.powerUps[i].ypos;
            let distanceBtwn = Math.sqrt((xd * xd) + (yd * yd));
            if (distanceBtwn <= this.radius + myGame.powerUps[i].radius) {
                if (myGame.powerUps[i].type == "moreSpeed") {
                    this.moreSpeed = true;
                } else if (myGame.powerUps[i].type == "invincible") {
                    this.invincible = true;
                }
                myGame.removePowerUp(myGame.powerUps[i], i);
            }
        }
    }

    puCounter() {
        if (this.moreSpeed && this.moreSpeedCount <= 300) {
            this.moreSpeedCount++;
        } else {
            this.moreSpeed = false;
            this.moreSpeedCount = 0;
        }

        if (this.invincible && this.invincibleCount <= 300) {
            this.invincibleCount++;
        } else {
            this.invincible = false;
            this.invincibleCount = 0;
        }
    }

    render() {
        this.xpos = this.xpos + this.Lspeed + this.Rspeed;
        this.ypos = this.ypos + this.Uspeed + this.Dspeed;
        this.elem.style.left = this.xpos + "px";
        this.elem.style.top = this.ypos + "px";
        this.p.id = this.role;
        this.collisionPowerUps();
        this.puCounter();
    }
}






class Timer {
    constructor(_id) {
        this.id = _id;
        this.elem = document.getElementById(this.id);
        this.timeLeft = 60
        this.timeEllapsed = 0;
    }

    countdown() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
        } else {
            clearInterval(timer_id);
            clearInterval(game_id);
            while (gamespace.firstChild) {
                gamespace.removeChild(gamespace.firstChild);
            }
            gameOver();
        }
    }

    countup() {
        this.timeEllapsed++;
    }
}





class PowerUp {
    constructor(_type) {
        this.xpos = (Math.random() * gs_width);
        this.ypos = (Math.random() * gs_height) + gs_top;
        this.radius = 15;
        this.type = _type;

        this.elem = document.createElement('div');
        this.elem.style.top = this.ypos + "px";
        this.elem.style.left = this.xpos + "px";
        this.elem.className = _type;
    }
}





function gameOver() {
        //let gameOver = document.getElementById('gameOver');

        let endscreen = document.createElement('div');
        endscreen.className = "jumbotron";

        let outcome = document.createElement('div');
        outcome.textContent = "";
        outcome.className = "alert alert-primary";

        if (myGame.player1.timer.timeEllapsed == myGame.player2.timer.timeEllapsed) {
            outcome.textContent = "The game was a tie, how disapointing, better play again! Click the refresh button to restart.";
        } else if (myGame.player1.timer.timeEllapsed > myGame.player2.timer.timeEllapsed) {
            outcome.textContent = "Player 1 is the WINNER!!! Click the refresh button to restart.";
        } else {
            outcome.textContent = "Player 2 is the WINNER!!! Click the refresh button to restart.";
        }

        let helpBtn = document.createElement('BUTTON');
        helpBtn.textContent = "Confused?";
        helpBtn.className = "btn btn-secondary";
        helpBtn.setAttribute('onlick', 'window.location.href = help.html');

        let menuBtn = document.createElement('BUTTON');
        menuBtn.textContent = "Menu";
        menuBtn.className = "btn btn-secondary";
        menuBtn.setAttribute('onlick', 'window.location.href = menu.html');

        gamespace.appendChild(endscreen);
        endscreen.appendChild(outcome);
        endscreen.appendChild(helpBtn);
        endscreen.appendChild(menuBtn);
    }




let myGame = new UltimateTagApp();

let game_id = setInterval(frame, 10);
function frame(){
    myGame.update();
    myGame.initializePowerUps();
}

let timer_id = setInterval(timer_frame, 100);
function timer_frame() {
    if (myGame.player1.role == "notIt") {
        myGame.player1.timer.countup();
    } else {
        myGame.player2.timer.countup();
    }
    myGame.timer.countdown();
}
