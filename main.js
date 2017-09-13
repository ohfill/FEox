// create point lists
var five = ['fox', 'falco', 'marth', 'sheik'];
var four = ['jigglypuff', 'peach'];
var three = ['falcon', 'icies', 'samus', 'pikachu', 'luigi'];
var two = ['mario', 'drmario', 'yoshi', 'ganon', 'link', 'ylink'];
var one = ['dk', 'ness', 'gnw', 'pichu', 'kirby'];
var zero = ['zelda', 'bowser', 'roy', 'mewtwo'];

function init() {
    var table = document.getElementById('castSelect');
    createRow(table, five, 5, addToTeam);
    createRow(table, four, 4, addToTeam);
    createRow(table, three, 3, addToTeam);
    createRow(table, two, 2, addToTeam);
    createRow(table, one, 1, addToTeam);
    createRow(table, zero, 0, addToTeam);
}

function addToTeam() {
    alert('you clicked '+this.className);
}

function createRow(table, cast, cost, func) {
    // display the price
    var row = document.createElement('tr');
    var header = document.createElement('th');
    var price = document.createTextNode(cost);
    header.colSpan = cast.length;
    header.appendChild(price);
    row.appendChild(header);
    table.appendChild(row);
    // add all the characters in this tier
    row = document.createElement('tr');
    for(var i=0; i<cast.length;i++) {
        var cell = document.createElement('td');
        cell.className = cast[i];
        var pic = new Image();
        pic.src = "cast/"+cast[i]+".png";
        cell.onclick = func;
        cell.appendChild(pic);
        row.appendChild(cell);
    }
    table.appendChild(row);
}