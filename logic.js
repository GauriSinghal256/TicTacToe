let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgameBtn = document.querySelector("#new-btn");


let turnO = true;
let winningPatterns =[[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] ,[1,4,7] ,[2,5,8] , [0,4,8] ,[2,4,6]];

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}
const resetGame = ()=>{
    count=0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newgameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congartulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=>{
    for (let pattern of winningPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner" , pos1val);
                showWinner(pos1val);
            }
        }
    }
}
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        count=count+1;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        if(count==9){
            msg.innerText = `Draw - Click the reset buttton `;
            msgContainer.classList.remove("hide");
        }
        checkWinner();

    });
} );