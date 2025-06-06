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

        

        //now we look into the player placing their ships..

 
        placeShips(computer)
        //update the game again

        console.log(computer.gameboard)
        
   renderGameBoards(player, computer)
        //add events to our player cells!
           addCellEvents()

         orientationButtonLogic()
    
    }






   // placeShips(player)

}
function orientationButtonLogic()
{
    const directionbutton = document.querySelector(".directiontoggle")

    directionbutton.addEventListener('click', (e) => 
    {

            if (e.target.innerHTML == "Vertical")
    {
      
        e.target.innerText = "Horizontal"
    }
    else{
        e.target.innerText = "Vertical"
    }
    })
    

    
    
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
function addCellEvents() {
    const playercells = document.querySelectorAll(".cell")

    playercells.forEach((e) => {

   e.addEventListener('click', (e) => {
        console.log(e.target.dataset.row, e.target.dataset.col)
    })
        

    })

 

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

            //we iterate the boards, we then find each domcell for each call
            //2d to 1d conversion row*rowlength+col

            //we have statuses for missed, hit and valud placement of ships
            let domcell = domcells[row*10+col]
            if (board[row][col].ship instanceof Ship && board[row][col].status == 'untouched')
            {
            
                domcell.classList.add('valid-placement')
            }
            if (board[row][col].status == "hit")
            {
                domcell.classList.add('hit')
            }
                        if (board[row][col].status == "miss")
            {
                domcell.classList.add('miss')
            }


        }
    }

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

if (player.playerType == "computer")
{
    console.log('docomputership placement!')

    let i = 0;
    let direction = "horizontal";
    while(i<shipnumber)
    {
        //we need to give differentn numbers for rowstart and colstart
        let ship = new Ship(shipFleet[i]);
       let rowstart = Math.floor(Math.random() * 10);
        let colstart = Math.floor(Math.random() * 10);
       
        //we need to not skip when we dont have a true

        
              console.log("ship placed at ", rowstart, " ", colstart, " ", "direction is ", direction, " ", "length is ", ship.length)
        player.gameboard.placeShip(ship, direction, rowstart, colstart) == false
        direction = "horizontal" ? "vertical" : "horizontal"
        i++
    }


}
if (player.playerType == "human")
{
        let i = 0
    while (i < shipnumber) {
        //create a ship of given lenght
        let ship = new Ship(shipFleet[i])

        
        //place the ship, we need to check that it is also being placed at valid coordinates!
        //when going to place the current ship we should show a hover

        //a couple things..
        updateShipInfo(shipFleet[i])
        

        //increment for next ship
        i++;
    }

        updateShipInfo(0)

}



    }



function updateShipInfo(shiplength)
{
    const length = document.querySelector(".length")
    length.innerText = "Length: " + shiplength;
}

