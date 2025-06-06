const Player = require("./Player");
const Ship = require("./Ship");
 const shipFleet = [5,4,3,3,2];

function gameDriver()
{
//create two players
let player1 = createPlayer("human")
let player2 = createPlayer("human")



//players populate ships from list above
populateShips(player1, "horizontal", 3,4)


populateShips(player2, "vertical", 3,4)
   console.log(player2.gameboard.board)
player1.gameboard.attack(3,4)
player2.gameboard.attack(3,4)
//console.log(player1.gameboard.board)
console.log(player1.gameboard.board)




}

gameDriver()


function createPlayer(type)
{
return new Player(type);

}
function populateShips(player, directionToggle, rowstart, colstart)
{
//this function takes a player obeject
//we then call player gameboard.place ship    

    for (let i = 0; i<shipFleet.length;i++)
    {
        //for each ship in the fleet we must give an option to place
        player.gameboard.placeShip(new Ship(shipFleet[i]),directionToggle, rowstart, colstart)
        break;
    }
    

}