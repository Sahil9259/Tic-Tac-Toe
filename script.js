console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let turn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn1 =  "X"
let gameover1= false;
// Function to change the turn
const changeTurn = ()=>{
    return turn1==="X"?"0": "X"
}
// function to check for a win
const checkWin= ()=>{
    let boxtext=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&(boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + "Won";
            gameover1=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px"
        }
    })
}
// Game Logic
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn1;
            turn1=changeTurn();
            turn.play();
            checkWin();
            if (!gameover1) {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn1;
            }
        }
    })
});
// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn1="X";
    gameover1=false
        document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn1;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px"

})