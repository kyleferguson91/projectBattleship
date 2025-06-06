

function createCells()
//serves to add cells to both boards
{
             const board1 = document.querySelector(".board1")
                         const board2 = document.querySelector(".board2")
    for (let row = 0; row<10; row++)
    {
        for (let col = 0; col<10; col++)
        {

   
            let current = board1
            let counter = 2
            while (counter > 0)
            {
            let cell = document.createElement("div")
            cell.classList.add("cell");
            cell.dataset.row=row
            cell.dataset.col = col
                current.appendChild(cell)
                current=board2
                counter--
            }


            

        }
    }
}

function addCellEvents()
{
    document.addEventListener('click', (e) =>
    {
        console.log(e.target.dataset.row, e.target.dataset.col)

    })
}


document.addEventListener("DOMContentLoaded", () => 
{
    createCells()
    addCellEvents()
})