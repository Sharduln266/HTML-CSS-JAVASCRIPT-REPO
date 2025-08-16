let boxes=document.querySelectorAll(".box")                     //for classes always use .classname 
let resetBtn=document.querySelector("#reset-btn")                   // for id always use  #idname

let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turno=true;       //player1,player2
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide")

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
       if(turno){
         box.innerText='O'
         turno=false;
       }
       else{
        box.innerText='X'
        turno=true;
       }
       box.disabled='true'
       checkWinner();
  });
})
const checkWinner = () =>{
    for(let pattern of winPatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
        if(pos1Val=== pos2Val && pos2Val=== pos3Val){
            console.log("winner",pos1Val)//pos1val

            showWinner(pos1Val);
            disabledBoxes();
        }
      }
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide")
   // disabledBoxes();
}




newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);