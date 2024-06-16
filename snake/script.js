const board = document.querySelector("#board");
const width = 50;
const height = 30;
let snake = [9,8,7,6,5,4,3,2,1,0];
let divs= [];
let direction = 'left'; 
let isGameOver = false;
let head = snake[0];
let app = 0;  
let interval;
let random;
 let score = 0;



 function startMusic() {
    backgroundMusic = new Audio("./22. The Only Thing They Fear Is You.mp3");
    backgroundMusic.loop = true;
    backgroundMusic.play();
}
function stopMusic() {
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}

//makes a board to put the snake on
function createBoard() {

    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    
    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        div.innerText = " ";
        board.appendChild(div);
        divs.push(div);
        
    };
    color();
    apple();
    autoMove();
    startMusic()
    
    
};


//add and removes snake parts
function color(){
    divs.forEach(div=>{
        div.classList.remove("snake");
    })
    snake.forEach(x=>{
        divs[x].classList.add("snake"); 
    })

    
};


function autoMove() {
    clearInterval(interval);
    const speed = 300 - score;
    interval = setInterval(() => move(direction), speed > 50 ? speed : 50);

    
};

function gameOver(){
    stopMusic()
    isGameOver = true;    
       snake = [9,8,7,6,5,4,3,2,1,0];
       head = snake[0];
       score = 0;
       color();
       clearInterval(interval);
       sound("./dscybdth.wav");
       document.querySelector("#newGame").style.display = "inline";
       setTimeout(() => alert("Game over"), 50);
        
};

function newGame() {
    snake = [9,8,7,6,5,4,3,2,1,0];
    head = snake[0];
    isGameOver = false;
    color();
    autoMove();
    document.querySelector("#score span").innerText = 0;
    score=0;
    direction = "left";
    document.querySelector("#newGame").style.display = "none";
     ;
     startMusic()
    
};


function sound(fileName) {
    const audio = document.createElement('audio');
    audio.src = fileName;
    audio.play();
};
//what direction the snake moves
function move(dir) {
    if (isGameOver) return;
//if you touch the snake you lose
    for (let i = 1; i < snake.length; i++) {
        
        if (snake[i] == snake[0]) {
            gameOver();
            return ; // יש פגיעה, הנחש נפסל
        };
      
    };



    if (divs[snake[0]].classList.contains("apple")){
        divs[head].classList.remove("apple");
        snake.push(app);
        color();
        score++;
        document.querySelector("#score span").innerText = score;
        sound("./dsshotgn.wav");
        sound("./dsdmpain.wav");
        apple();
    }else if(divs[snake[0,1,2,3,4,5,6,7,8]].classList.contains("apple")){
        divs[0].classList.remove("apple");
        apple();

    };

   

    if (dir === 'up') {
        if (dir === 'down') {
            return;
        }
        head -= width;
    
        if (head <0){
            gameOver();
        return ;
    }
    } else if (dir === 'down') {
        if (dir === 'up') {
            return;
        }

        head += width;

        if (head >= width*height){
            gameOver();
        return ;
        }

    } else if (dir === 'left') {
        if (dir === 'right') {
            return;
        }
        head++;
        if (head % width === 0){
            gameOver();
            return ;
        }
        
    } else if (dir === 'right') {
        if (dir === 'left') {
            return;
        }
if (head % width === 0){
    gameOver();
    return ;
}
        head--;
    }

    direction = dir;
    snake.unshift(head);
    snake.pop();
    color();

};






window.addEventListener("keydown",ev => {ev.preventDefault();
    if (ev.key === "ArrowUp") {
        move("up");
    } else if (ev.key === "ArrowDown") {
        move("down");
    } else if (ev.key === "ArrowLeft") {
        move("left");
    } else if (ev.key === "ArrowRight") {
        move("right");
    }
});






function apple(){
    let app;
    do {
        app = Math.floor(Math.random() * (width * height));
    } while (snake.includes(app));
    divs[app].classList.add("apple");
};

