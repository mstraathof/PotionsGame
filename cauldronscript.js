/*
Mira Straathof
Potion memory game
*/

var playing = false;
var score;
let correct = 0;
let wrong = 0;
let correntIngrs = JSON.parse(localStorage.getItem("ingrs"));

$(function() {
    addEventHandlers();
    wrong = 0;
    correct = 0;
});

function reset() {
    wrong = 0;
    correct = false;
}

function isCorrect() {
    if (wrong != 0) {
        console.log("wronggg");
        return false;
    }
    return true;
}

function addEventHandlers() {
    $("#done").click(function() {
        if(isCorrect()){
            reset();
            $("#winner").modal();
        } else {
            $("#wrongscore").html(`You picked ${wrong} wrong ingredients`);
            $("#loser").modal(); 
            reset();
        }
    });
    $("td").click( function () {
        let ingr = $(this).attr('id');
        console.log("ingr: "+ingr);
        // check if ingredient is corrent
        let isFound = false;
        $.each(correntIngrs, function(key, value) {
            console.log("value: "+value+"   ingr: "+ingr);
            if(ingr === value) {
                console.log("found a match");
                isFound = true;
            }
        });
        console.log("isFound: "+isFound);
        if (!isFound) {
            wrong++;
        }
    });
    $("td").draggable({
        cancel:false,
        stop: function(event, ui){
        }
    });
    $("#cauldron").droppable({
        drop: function(event, ui) {
            $(this).addClass($(ui.draggable).css("z-index","-1"));
        }
    });
    
}