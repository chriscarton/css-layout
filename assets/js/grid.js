gridFunctions();
function gridFunctions() {
  let grid = document.querySelector(".grid");

  //Celui-là est un peu différent car il comprends un bouton
  let gridTemplateColumnsField = document.querySelector(
    ".grid-template-columns"
  );
  let submitGridTemplateColumns = document.querySelector(
    "#submitGridTemplateColumns"
  );
  submitGridTemplateColumns.addEventListener("click", function (e) {
    e.preventDefault();
    let value = gridTemplateColumnsField.value;
    grid.style.gridTemplateColumns = value;
  });

  //Celui-là aussi
  let gridTemplateRowsField = document.querySelector(".grid-template-rows");
  let submitGridTemplateRows = document.querySelector(
    "#submitGridTemplateRows"
  );
  submitGridTemplateRows.addEventListener("click", function (e) {
    e.preventDefault();
    let value = gridTemplateRowsField.value;
    alert(value);
    grid.style.gridTemplateRows = value;
  });

  let gridAutoFlowField = document.querySelector(".grid-auto-flow");
  gridAutoFlowField.addEventListener("change", function (e) {
    let value = e.target.value;
    grid.style.gridAutoFlow = value;
  });

  let justifyContentField = document.querySelector(".justify-content");
  justifyContentField.addEventListener("change", function (e) {
    let value = e.target.value;
    grid.style.justifyContent = value;
  });

  let alignContentField = document.querySelector(".align-content");
  alignContentField.addEventListener("change", function (e) {
    let value = e.target.value;
    grid.style.alignContent = value;
  });

  let justifyItemsField = document.querySelector(".justify-items");
  justifyItemsField.addEventListener("change", function (e) {
    let value = e.target.value;
    grid.style.justifyItems = value;
  });

  let alignItemsField = document.querySelector(".align-items");
  alignItemsField.addEventListener("change", function (e) {
    let value = e.target.value;
    grid.style.alignItems = value;
  });

  //Btn settings :
  let btnSettings = document.querySelector(".settings");
  let form = document.querySelector("#formSettings");
  btnSettings.addEventListener("click", function (e) {
    e.preventDefault();
    if (form.classList.contains("opened")) {
      form.classList.remove("opened");
    } else {
      form.classList.add("opened");
    }
  });

  //close
  let close = document.querySelector(".close-form-grid");
  close.addEventListener("click", function (e) {
    e.preventDefault();

    if (form.classList.contains("opened")) {
      form.classList.remove("opened");
    } else {
      form.classList.add("opened");
    }
  });
}
