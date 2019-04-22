




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

    assignRoles(){

    }

    let id = setInterval(frames, 10);

    function frames(){
        this.player1.render();
        this.player2.render();
    }
}




class Player {
    constructor(_xpos, _ypos, _color, _id) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.color = _color;
        this.id = "player";
        this.elem = document.getElementsByClassName("player");
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
        this.elem.style.top = this.ypos;
        this.elem.style.left = this.xpos;
        this.xpos = 500;
        this.ypos = 500;
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
  }

  getTime() {
    let start = new Date();

    function updateTime() {
      let timeLeft = 60 - ((Date().now - start.getTime())/1000);
      document.getElementById("timer").textContent = timeLeft;
    }

    updateTime();
    setInterval(updateTime, 1000);
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
