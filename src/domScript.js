import { shipFleet } from './Ship.js';
import Player from './Player.js';
import Ship from './Ship.js'
const shipnumber = shipFleet.length
let started = false;
//enterance function
export function startUI(player, computer) {
startGame(player,computer)
}
function startGame(player,computer) {
    //click of start button
    //calls on create cells, add events

    const startbutton = document.querySelector(".start-btn")

    startbutton.addEventListener("click", () => startGameLogic(player,computer))

}


function startGameLogic(player,computer) {
    //when start button clicked, set global started true
    //create the game cells
    //add the game cells

    if (started == false) {
        started = true;
        //create the cells to populate the board()
        createCells()
        //from here we can call renderGameBoards(player1, computer)
       
        renderGameBoards(player, computer)
    }








   // placeShips(player)

}
function createCells()
//serves to add cells to both boards
{
    const board1 = document.querySelector(".board1")
    const board2 = document.querySelector(".board2")



    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {


            let current = board1
            let counter = 2
            while (counter > 0) {
                let cell = document.createElement("div")
                if (current == board1) {
                    cell.classList.add("cell")
                    cell.dataset.type = "human"
                }
                else {
                    cell.classList.add("cellcomputer")
                    cell.dataset.type = "computer"

                }
                cell.dataset.row = row
                cell.dataset.col = col
                current.appendChild(cell)
                current = board2
                counter--
            }




        }
    }
}


function renderGameBoards(player, computer)
//serves to add cells to both boards
{
    const domplayerboard = document.querySelector(".board1")
    const domcomputerboard = document.querySelector(".board2")

    let playerboard = player.gameboard.board;
    let computerboard = computer.gameboard.board;

    //based on the content that is in the boards of the player and comptuer, we should render the display
    //cells are already created and just need updated based on the current board status 
    const playercells = document.querySelectorAll(".cell")
    const computercells = document.querySelectorAll(".cellcomputer")

    renderSingleBoard(playerboard, playercells);
     renderSingleBoard(computerboard, computercells);
}

function renderSingleBoard(board, domcells) {

    //check out the board
    for (let row = 0; row<10; row++)
    {
        for (let col = 0; col<10; col++)
        {

            if (board[row][col] == 0)
            {
               
                for (let cell of domcells)
                {
                    if (cell.dataset.row == row && cell.dataset.col == col)
                    {
                        cell.classList.add("miss")
                    }
                }
            }

        }
    }

}

function addCellEvents() {
    document.addEventListener('click', (e) => {
        console.log(e.target.dataset.row, e.target.dataset.col)

    })
    document.addEventListener('mouseover', mouseOverGhostShip)
}

function onClickSubmitShip(e) {

}

function mouseOverGhostShip(e) {
    //want to create a ghost outline of where the ship will start and land 
    if (e.target.dataset.type == 'human') {
        console.log(e.target.dataset.row, e.target.dataset.col)
    }
    //the current area will hover, but we want to also show an indication of where the ship will land..
    //we should highlight all  the cells between the two points given it is a valid shape..

}


function updatePlayerComputerCells() {
    //this function should remove the event listener from the players cells
    //and then add one to the comptuers cells to account for cliking to select ships
    //this should only occurr after player has placed ships!
}







//create players
function createPlayer(type) {
    let player = new Player(type)
    return player;
}

function placeShips(player) {
    addCellEvents("player")
    //we need to loop the ships

    let i = 0
    while (i < shipnumber) {
        //create a ship of given lenght
        let ship = new Ship(shipFleet[i])

        //place the ship, we need to check that it is also being placed at valid coordinates!
        //when going to place the current ship we should show a hover
        if (player.gameboard.placeShip(ship, direciton, rowstart, colstart) != false) {
            //this is a valid placement of the ship!
        }

        //increment for next ship
        i++;
    }














    //we have 
    turnText(0)
}

function turnText(move) {

    const title = document.querySelector(".title")
    if (move > shipnumber * 2) {
        title.innerHTML = "Battle Ship!"
    }
    title.innerHTML = "Place Your Ship!"

}