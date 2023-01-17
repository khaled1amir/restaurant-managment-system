// getting the buttons
const firstFloorbtn = document.getElementById("firstFloor");
const secondFloorbtn = document.getElementById("secondFloor");
// getting the div that contains the tables
var firstFloorTables = `
<div class="row1">
<div class="table table1" id="table1">
    <div class="tableShape">
        <h1>T1</h1>
    </div>
</div>
<div class="table table2" id="table2">
    <div class="tableShape">
        <h1>T2</h1>
    </div>
</div>
<div class="table table3" id="table3">
    <div class="tableShape">
        <h1>T3</h1>
    </div>
</div>
</div>
<div class="row2">
<div class="table table4" id"table4">
    <div class="tableShape">
        <h1>T4</h1>
    </div>
</div>
<div class="table table5" id="table5">
    <div class="tableShape">
        <h1>T5</h1>
    </div>
</div>
<div class="table table6" id="table6">
    <div class="tableShape">
        <h1>T6</h1>
    </div>
</div>
</div>
`;
var secondFloorTables = `
<div class="row1">
<div class="table table7" id="table7">
    <div class="tableShape">
        <h1>T7</h1>
    </div>
</div>
<div class="table table8" id="table8">
    <div class="tableShape">
        <h1>T8</h1>
    </div>
</div>
<div class="table table9" id="table9">
    <div class="tableShape">
        <h1>T9</h1>
    </div>
</div>
</div>
<div class="row2">
<div class="table table10" id="table10">
    <div class="tableShape">
        <h1>T10</h1>
    </div>
</div>
<div class="table table11" id="table11">
    <div class="tableShape">
        <h1>T11</h1>
    </div>
</div>
<div class="table table12" id="table12">
    <div class="tableShape">
        <h1>T12</h1>
    </div>
</div>
</div>
`;
var tablesContainer = document.getElementById("tables");
// adding the default
tablesContainer.innerHTML = firstFloorTables;
// handling the first button click event
firstFloorbtn.onclick = () => {
    secondFloorbtn.style.backgroundColor = '#FAFAFA';
    secondFloorbtn.style.color = '#D9D9D9';
    firstFloorbtn.style.backgroundColor = '#E8C5A3';
    firstFloorbtn.style.color = '#000';
    tablesContainer.innerHTML = firstFloorTables;
}
// handling the second button click event
secondFloorbtn.onclick = () => {
    firstFloorbtn.style.backgroundColor = '#FAFAFA';
    firstFloorbtn.style.color = '#D9D9D9';
    secondFloorbtn.style.backgroundColor = '#E8C5A3';
    secondFloorbtn.style.color = '#000';
    tablesContainer.innerHTML = secondFloorTables;
}