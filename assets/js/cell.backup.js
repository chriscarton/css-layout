//Setting for a cell
cellFunctions();
function cellFunctions() {
  let formCell = document.querySelector("#formCell");

  //Parcours des boutons de réglage des cellules.
  document.querySelectorAll(".btn-cell").forEach(item => {
    item.addEventListener("click", e => {
      formCell.reset();

      let cell_id = document.querySelector(".cell-id");
      cell_id.value = item.parentNode.classList[1];

      let cell = null;
      cell = document.querySelector("." + cell_id.value);
      console.log(cell);

      //ouverture du panneau latéral
      e.preventDefault();
      if (formCell.classList.contains("opened")) {
        formCell.classList.remove("opened");
      } else {
        formCell.classList.add("opened");
      }

      //Grid Column!
      let gridColumnField = document.querySelector(".grid-column");
      let submitGridColumn = document.querySelector("#submitGridColumn");
      submitGridColumn.addEventListener("click", function (e) {
        e.preventDefault();
        let value = gridColumnField.value;
        cell.style.gridColumn = value;
      });

      //Grid Row!
      let gridRowField = document.querySelector(".grid-row");
      let submitGridRow = document.querySelector("#submitGridRow");
      submitGridRow.addEventListener("click", function (e) {
        e.preventDefault();
        let value = gridRowField.value;
        cell.style.gridRow = value;
      });

      //Background Color!
      let cellBackgroundColorField =
        document.querySelector(".background-color");
      let submitCellBackgroundColor = document.querySelector(
        "#submitCellBackgroundColor"
      );
      submitCellBackgroundColor.addEventListener("click", function (e) {
        e.preventDefault();
        let value = cellBackgroundColorField.value;
        cell.style.backgroundColor = value;
      });
    });
  });

  //close
  let close = document.querySelector(".close-form-cell");
  close.addEventListener("click", function (e) {
    e.preventDefault();

    if (formCell.classList.contains("opened")) {
      formCell.classList.remove("opened");
    } else {
      formCell.classList.add("opened");
    }
  });
}
