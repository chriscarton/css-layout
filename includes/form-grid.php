<form id="formSettings">

<header class="form-header">
    <h1 class="form-title">Grid</h1>
</header>
<div class="group">
    <b>grid : grid-template-columns</b>
    <div>
        <input type="text"
            class="grid-template-columns"
            placeholder="ex: 1fr 2fr"
        >
        <button class="form-btn" id="submitGridTemplateColumns">ok!</button>
    </div>
    <div class="info">
        Colonnes. 
    </div>
</div>

<div class="group">
    <b>grid : grid-template-rows</b>
    <div>
        <input type="text"
            class="grid-template-rows"
            placeholder="ex: 1fr 2fr"
        >
        <button class="form-btn" id="submitGridTemplateRows">ok!</button>
    </div>
    <div class="info">
        Lignes. 
    </div>
</div>

<div class="group">
    <b>grid : grid-auto-flow</b>
    <select
        class="grid-auto-flow"
    >
        <option>row</option>
        <option>column</option>
        <option>dense</option>
        <option>column dense</option>
        <option>row dense</option>

    </select>
    <div class="info">
        Ordre du flux. <i>default:row</i>
    </div>
</div>

<div class="group">
    <b>grid : justify-content</b>
    <select
        class="justify-content"
    >
        <option>stretch</option>
        <option>start</option>
        <option>end</option>
        <option>center</option>
        <option>space-around</option>
        <option>space-between</option>
        <option>space-evenly</option>
    </select>
    <div class="info">
        Répartition verticale des éléments. <i>default:stretch</i>
    </div>
</div>


<div class="group">
    <b>grid : align-content</b>
    <select
        class="align-content"
    >
        <option>stretch</option>
        <option>start</option>
        <option>end</option>
        <option>center</option>
        <option>space-around</option>
        <option>space-between</option>
        <option>space-evenly</option>
    </select>
    <div class="info">
        Répartition horizontale des éléments. <i>default:stretch</i>
    </div>
</div>

<div class="group">
    <b>grid : justify-items</b>
    <select
        class="justify-items"
    >
        <option>start</option>
        <option>end</option>
        <option>center</option>
        <option>stretch</option>
        <option>baseline</option>
    </select>
    <div class="info">
        alignement horizontal des éléments dans les cellules. <i>default:normal|stretch</i>
    </div>
</div>

<div class="group">
    <b>grid : align-items</b>
    <select
        class="align-items"
    >
        <option>stretch</option>
        <option>start</option>
        <option>center</option>
        <option>end</option>
        <option>baseline</option>
    </select>
    <div class="info">
        alignement vertical des éléments dans les cellules. <i>default:normal|stretch</i>
    </div>
</div>



</form>