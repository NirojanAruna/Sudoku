function genLine(){
    var counter = num.length;
    while (counter > 0) {
        var index = Math.floor(Math.random()*counter);
        counter--;
        var temp = num[counter];
        num[counter] = num[index];
        num[index] = temp;
    }
    return num
}
function shift(firstLine, amount){
    return firstLine.slice(amount,firstLine.length).concat(firstLine.slice(0,amount));
};
function genGrid(difficulty){
  firstLine = genLine();
  var amount = [1,4,7,2,5,8,3,6,9];

    for (var i = 0; i < 9; i++){
        grid[i] = (shift(firstLine, amount[i]));
        for (var j = 0; j < 9; j++){

            var cell = document.getElementById(i.toString()+j.toString());
            var empty = Math.random() >= difficulty;
            var iD = cell.id;
            if (empty == true){
                gameGrid[i][j] = "  ";
                cell.innerHTML = "<input id= " + iD +"i type= \"number\" class= \"cellOnClick\" oninput= \"getValue(this.id, this.value)\" >";
            } else {
                gameGrid[i][j] = grid[i][j];
                cell.innerHTML = gameGrid[i][j];  
            }
        
            var temp1 = parseInt(cellNum) + 1;
            cellNum = temp1.toString();
        }
    }
};

function getValue(id, value){
    var temp = "  ";
    if (id.length == 2) {
        temp = id.toString().substr(0,1);
    } else {
        temp = id.toString().substr(0,2);
    }

    var x = 0;
    var y = 0;

    if (temp.length == 1) {
        x = 0;
        y = parseInt(temp);
    } else {
        x = parseInt(temp.toString().substr(0,1));
        y = parseInt(temp.toString().substr(-1));
    }
    gameGrid[x][y] = parseInt(value);

    if (gameGrid.toString() == grid.toString()){
        alert("Puzzle Complete");
    }
}
function showList() {
    document.getElementById("list").classList.toggle("showDrop");
}

function makeCall(difficulty) {
    document.getElementById("list").classList.remove("showDrop");
    genGrid(difficulty);
}

var cellNum = "1";
var num = [1,2,3,4,5,6,7,8,9];
var grid = new Array(9);
for (var x = 0; x < 9; x++){
    grid[x] = new Array(9);
    for (var y = 0; y < 9; y++){
        grid [x][y] = y+1;
    }
}

var gameGrid = grid.map(x => x);

genGrid(0.5);
                