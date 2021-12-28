var scoreboard_table;
var round = 2;

function debug() {
    scoreboard_table = document.getElementById("scoreboard");
    console.log(scoreboard_table);
    console.log(document.getElementById("addPlayerScore"));
}

function addRow() {
    scoreboard_table = document.getElementById("scoreboard");
    var row = scoreboard_table.insertRow();
    for (let i = 0; i < scoreboard_table.rows[0].cells.length; i++) {
        new_cell = row.insertCell();
        new_cell.innerHTML = "testing123";
    }
}

function removeLastRow() {
    scoreboard_table = document.getElementById("scoreboard");
    if (scoreboard_table.rows.length > document.getElementById("addPlayerScore").rowIndex + 1) {
        scoreboard_table.deleteRow(-1);
    }
}