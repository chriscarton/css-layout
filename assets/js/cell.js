//Setting for a cell
let formCell = document.querySelector('#formCell');

document.querySelectorAll('.btn-cell').forEach(item => {
    item.addEventListener('click', e => {
      
      let cell_class_id = item.classList[1];
      
    
      e.preventDefault();
      if(formCell.classList.contains('opened')){
          formCell.classList.remove('opened');
      }else{
          formCell.classList.add('opened');
      }

      //Grid Column!
      let gridColumnField = document.querySelector('.grid-column');
      let submitGridColumn = document.querySelector('#submitGridColumn');
      submitGridColumn.addEventListener('click',function(e){
          e.preventDefault();
          let value = gridColumnField.value;
          
          let cell_target = document.querySelector('.'+cell_class_id);

          cell_target.parentNode.style.gridColumn = value;
      });

      //Grid Row!
      let gridRowField = document.querySelector('.grid-row');
      let submitGridRow = document.querySelector('#submitGridRow');
      submitGridRow.addEventListener('click',function(e){
          e.preventDefault();
          let value = gridRowField.value;
          
          let cell_target = document.querySelector('.'+cell_class_id);

          cell_target.parentNode.style.gridRow = value;
      });






    })
  });


  //close 
let close2 = document.querySelector('.close-form-cell');
close2.addEventListener('click',function(e){
    e.preventDefault();

    if(formCell.classList.contains('opened')){
        formCell.classList.remove('opened');
    }else{
        formCell.classList.add('opened');
    }
});