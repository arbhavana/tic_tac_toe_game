let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset")
let turn0 = true;
let cnt = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "0";
            box.style.color = "red";
            turn0 = false;
        }else{
            box.innerText = "x";
            box.style.color = "purple";
            turn0 = true;
        }
        box.disabled = true;
        cnt++;

        let isWinner = checkWinner();

        if (cnt===9 && !isWinner){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = "The game is a Draw"
    console.log("draw game");
    msgContainer.classList.remove("hide");
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const eanbleBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != ""){
            if (val1===val2 && val3===val2){
                msg.innerText = `Congratulations, ${val1} won the match`;
                msgContainer.classList.remove("hide");
                console.log("draw game");
                disableBoxes();
                return true;
            }
        }

    }
}

const resetGame = () => {
    eanbleBoxes();
    turn0 = true;
    cnt = 0;
    msgContainer.classList.add("hide");

}
resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame());