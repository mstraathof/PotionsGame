// 14 ingredients
var ingredients = ['beetles', 'lacewing', 'fluxweed', 'knotgrass', 'leech', 'bicorn', 'hair', 'boomslang', 'wormwood', 'cabbage', 'beanjuice', 'eeleyes', 'slothbrain', 'pufferfisheyes'];
var level = 0;
let array = [];

$(function() {
    /* 
    easy = 2 ingredients to memorize
    medium = 3 ingredients
    hard = 5 ingredients
    */
    $("#easy").bind('click', function () {
        console.log("picked easy");
        level = 2;
        pickIngredients(level);
        timeModal();
    });
    $("#medium").click( function () {
        console.log("picked medium");
        level = 3;
        pickIngredients(level);
        timeModal();
    });
    $("#hard").click( function () {
        console.log("picked hard");
        level = 5;
        pickIngredients(level);
        timeModal();
    });
});

function clear() {
    $("#placeholder").html("");
    level = 0;
    array = [];
}

function timeModal() {
    //let myModal = $("#skelegromodal");
    let html = createModal();
    clear();
    $("#placeholder").append($(html));
    let myModal = $("#placeholdermodal")
    setTimeout(function() {
        window.location.href = "cauldron.html";
    }, 3000);
}

function createModal() {
    let modal = 
        `<div id="placeholdermodal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">`;
    $.each(array, function(key,value) {
        let temp = `
                        <p>
                            ${value}
                            <img src="images/${value}.png">
                        </p>`;
        modal += temp;
    });
    modal += `
                    </div>
                </div>
            </div>
        </div>`;
    console.log("modal: "+ modal);
    return modal;
}

function pickIngredients(level) {
    let shuffledIngrs = shuffle(ingredients);
    for (var i=0; i<level; i++) {
        array.push(shuffledIngrs[i]);
        console.log("chosen ingr: "+array[i]);
    }
    localStorage.setItem("ingrs", JSON.stringify(array));

}

function chooseIngredient(){
    let ingr = bubbles[Math.round(13*Math.random())];
    console.log('ingr: '+ingr);
    console.log('image name: '+ingrImg);
    return ingr;
}

/**
 * Got this method from Stack Overflow as reference
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}