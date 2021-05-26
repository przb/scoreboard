var table;
var round = 3;

function addItems(){

    //Map the table to the table variable
    var table = document.getElementById("scoreboard");

    // Get the number of players by seeing how many scoreboxes there are
    numberItems = document.getElementsByClassName("scorebox").length

    // Make an empty array for the player Scores
    var playerScore = [];

    //Make a new row for the round's score
    var newRow = table.insertRow(-1);

    // Insert the row for 
    var newCell = newRow.insertCell(0);
    newCell.innerHTML = round;
    newCell.outerHTML = "<th class=\"round0\">" + round +"</th>";

    //Loop to add all players scores to the table    
    for (var i = 0; i < numberItems; i++){
        var score;
        if (document.getElementsByClassName("scorebox")[i].value == ""){
            score = 0;
        }
        else{
            score = parseInt(document.getElementsByClassName("scorebox")[i].value);
            
        }

        playerScore.push(score);

        //Insert the value of the player's score for the round
        newCell = newRow.insertCell(i+1);
        newCell.innerHTML = score;

        //Reset the value of the text Boxes
        document.getElementsByClassName("scorebox")[i].value = '';
    }

    //Increment the round
    round++;

    //Log the player Scores
    console.log(playerScore);

    //Execute the addscore function and passthrough the playerScore array
    addScore(playerScore);
}
function addScore(playerScore){
    var playerTotal = [];
    for (var i = 0; i < numberItems; i++){

        //Get the total variable from the innerhtml of the totalscore class
        var total = parseInt(document.getElementsByClassName("totalscore")[i].innerHTML.trim());

        //Add the player score to the total
        total = total + playerScore[i];

        //Set the total HTML to the total
        document.getElementsByClassName("totalscore")[i].innerHTML = total;
        
        //Add the total to the playertotal array
        playerTotal.push(total);
        
    }
    
    //Log the player total array
    console.log(playerTotal);
    
    }

    function addPlayer(){
        var newPlayerName = document.getElementById("addPlayer").value;
        var newPlayerCell = players.insertCell(-1);
        newPlayerCell.innerHTML = newPlayerName;

        var newTotalCell = total.insertCell(-1);
        newTotalCell.outerHTML = "<td class=\"totalscore\">0</td>";
        
        var newAddCell = add.insertCell(-1);
        newAddCell.outerHTML = '<td><input type="text" id="1" placeholder="Score" class="scorebox"/></td>';

        document.getElementById("addPlayer").value = "";
    }

    function debug(){
        console.log(document.getElementsByClassName("scorebox")[1]);
}
