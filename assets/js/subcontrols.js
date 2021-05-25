subcontrolsFunctions();

function subcontrolsFunctions() {
  let addCell = document.querySelector(".add-cell");
  addCell.addEventListener("click", e => {
    e.preventDefault();

    let allCell = document.querySelectorAll(".cell");
    let number = allCell.length + 1;
    let someCell = document.querySelector(".cell");

    let grid = document.querySelector(".grid");

    //Copie l'élément
    let newCell = someCell.cloneNode(true);

    newCell.id = "cell-" + number;
    newCell.querySelector(".btn-cell").id = "btn-cell-" + number;
    newCell.querySelector("span").textContent = number;

    grid.append(newCell);
  });

  let removeCell = document.querySelector(".remove-cell");

  removeCell.addEventListener("click", e => {
    e.preventDefault();
    let allCells = document.querySelectorAll(".cell");
    console.log(allCells);

    allCells[allCells.length - 1].remove();
  });
}
