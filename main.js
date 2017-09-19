// create point lists
var five = ['fox', 'falco', 'marth', 'sheik'];
var four = ['jigglypuff', 'peach'];
var three = ['falcon', 'icies', 'samus', 'pikachu', 'luigi'];
var two = ['mario', 'drmario', 'yoshi', 'ganon', 'link', 'ylink'];
var one = ['dk', 'ness', 'gnw', 'pichu', 'kirby'];
var zero = ['zelda', 'bowser', 'roy', 'mewtwo'];

var activeTeam;
var teams = [];

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
    if(activeTeam == undefined) {
        return;
    }
    var name = this.classList[0];
    var cost = this.classList[1];
    var curTeam = document.getElementById(activeTeam);
    var curPoints = curTeam.children[0];
    if(curPoints.textContent - cost < 0) {
        console.log("can't exceed point total");
        return;
    } else if(curTeam.children.length > 5) {
        console.log("can't have over 5 characters");
        return;
    } else if(curTeam.getElementsByClassName(name).length > 0) {
        console.log("can't have same member more than once");
        return;
    }
    // function is removeFromTeam()
    createCell(curTeam, name, cost, function(){
        curPoints.textContent = parseInt(curPoints.textContent) + parseInt(cost);
        this.remove();
    });
   curPoints.textContent = curPoints.textContent - cost;
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
        createCell(row, cast[i], cost, func);
    }
    table.appendChild(row);
}

function createCell(row, name, cost, func) {
    var cell = document.createElement('td');
    cell.className = name
    var pic = new Image();
    pic.src = "cast/"+name+".png";
    cell.classList += " "+cost;
    cell.onclick = func;
    cell.appendChild(pic);
    row.appendChild(cell);
}

// called when the submit button is pressed
function createTeam(item) {
    var name = item.children[0];
    if(name.value === '') {
        return false;
    }
    if(teams.indexOf(name.value) > -1) {
        console.log('duplicate team name', name.value);
        name.value = '';
        return false;
    }

    teams.push(name.value);
    activeTeam = name.value;
    var table = document.createElement('table');
    var row = document.createElement('tr');
    var header = document.createElement('th');
    var text = document.createTextNode(name.value);
    header.appendChild(text);
    row.appendChild(header);
    table.appendChild(row);
    row = document.createElement('tr');
    row.id = name.value;
    var cell = document.createElement('td');
    text = document.createTextNode(15);
    cell.appendChild(text);
    row.appendChild(cell);
    table.appendChild(row);
    document.getElementById('theTeams').appendChild(table);

    name.value = '';
    return false;
}

function makeActive(name) {
    activeTeam = name;
}
