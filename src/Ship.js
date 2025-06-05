class Ship
{
  
constructor(length)
{
    this.length = length;
    this.isHit = 0;
    this.sunk = false;


}


 hit()
{
    //if the ship is hit, we want to call the hit function on it..
    //when we have a gui, we will need to keep track of the specific cells hit..
    this.length = this.length -1;
    //increate the number of hits
    this.isHit = this.isHit + 1;
    
    console.log("has been hit, calulating now")
    //now call is sunk to check for sunk status
    if (this.isSunk())
    {
        this.sunk = true;
    }

}

isSunk()
{
        console.log("checking for is sunk", this.isHit, this.sunk, this.length)
return this.length <= 0;
}


}

module.exports = Ship;