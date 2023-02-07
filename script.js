document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector("#container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
    }
}

function getSize(){
    let input = prompt("Choose a board size between 1 and 100.");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    } else if(input <0 || input > 100){
        message.innerHTML = "Number must be between 1 and 100"
    } else{
        message.innerHTML = "Now you can play!"
        return input;
    }
}
// const containerDiv = document.querySelector("#container");
// const resetBtn = document.querySelector("#resetBtn");

// function makeGrid (rows, columns) {
//     containerDiv.style.setProperty("--grid-rows", rows);
//     containerDiv.style.setProperty("--grid-columns", columns);
//     containerDiv.style.overflow = "hidden";

//     for (i = 0; i < (rows * columns); i++) {
//         let square = document.createElement("div");
//         // square.innerText = (i + 1);
//         square.style.minHeight = "0";
//         square.style.minWidth = "0";
//         square.style.overflow = "hidden";
//         containerDiv.appendChild(square).className = "grid-item";
//         square.addEventListener("mouseover", () => {
//             square.style.backgroundColor = "black";
//         })
//     }
// }

// resetBtn.addEventListener('click', () => {
//     document.querySelectorAll(".grid-item").forEach(e => e.remove());
//     let userGridInput = prompt("Please enter the desired number of grid cells per side (max: 100). ");
//     if (userGridInput > 100) {
//         alert("ERROR: grid size greater than 100.");
//         return;
//     } else {
//     let rows = userGridInput;
//     let columns = userGridInput;
//     makeGrid = (rows,columns);
//     return;
//     }
// })

// makeGrid(16, 16);

