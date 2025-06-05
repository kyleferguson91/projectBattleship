class Ship
{
constructor(length, isHit, isSunk)
{
    this.length = length;
    this.isHit = isHit;
    this.isSunk = isSunk;


}

 hit()
{
    //if the ship is hit, we want to call the hit function on it..
    //when we have a gui, we will need to keep track of the specific cells hit..
    this.length = this.length -1;
    //increate the number of hits
    this.isHit = this.isHit + 1;
    if (this.hit >= this.length)
    {
        this.isSunk = true;
    }
}



}