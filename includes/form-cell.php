<form id="formCell">

    <header class="form-header">
        <h1 class="form-title">Cell</h1>
        <a class="close close-form-cell">
            <?php include('assets/icons/close.svg');?>
        </a>
    </header>

    <div class="group">
        <b>Cell ID</b>
        <div>
            <input
                type="text"
                class="cell-id"
            >
        </div>
    </div>

    <div class="group">
        <b>Grid Column</b>
        <div>
            <input 
                type="text"
                class="grid-column"
                placeholder="1/4"
            >
            <button class="form-btn" id="submitGridColumn">ok!</button>
        </div>
        <div class="info">
            Nombre de colonnes occupées sur la grille.
        </div>
    </div>
    <div class="group">
        <b>Grid Row</b>
        <div>
            <input 
                type="text"
                class="grid-row"
                placeholder="1/4"
            >
            <button class="form-btn" id="submitGridRow">ok!</button>
        </div>
        <div class="info">
            Nombre de lignes occupées sur la grille.
        </div>
    </div>

    align-self
    justify-self

    <div class="group">
        <b>Background Color</b>
        <div>
            <input 
                type="color"
                class="background-color"
            >
            <button class="form-btn" id="submitCellBackgroundColor">ok!</button>
        </div>
        <div class="info">
            Couleur de fond.
        </div>
    </div>
    
    <!-- <div class="group">
        <b>cell:area</b>
        <div>
            <input 
                type="text"
                class="area-name"
                placeholder="1/4"
            >
        </div>
        <div class="info">
            Une info.
        </div>
    </div> -->


</form>