function GameExecution(gameArray) {
    
    for (var i = 0; i < gameArray.length; i++) {
        var vertDiscCount = gameArray[i].length;
        for (var j = 0; j < vertDiscCount; j++) {
            if (gameArray[i][j] == vertDiscCount) {
                gameArray[i][j] = 0;
            }

        }
    }
    //forloop to find disc procs on rows
    for (var i = 0; i < gameArray.length; i++) {
        var chain = 0;
        for (var j = 0; j <= gameArray.length; j++) {
            if (j < gameArray.length && gameArray[j].length >= i + 1) {
                chain++;
            }
            else if (chain > 0){
                for (k = j - chain; k < j; k++) {
                    if (gameArray[k][i] == chain) {
                        gameArray[k][i] = 0;
                    }
                }
                chain = 0;
            }
        }
    } 
    //for loop to explode surrounding stones
    for (var i = 0; i < gameArray.length; i++) {
        for (var j = 0; j < gameArray[i].length; j++) {
            if (gameArray[i][j] == 0) {
                ExplodeSurroundingStones(gameArray, i, j);
            }
        }
    }
    console.log("game execution");
    var numsToCheck = 1;
    while (numsToCheck != 0)
    {
        for (var i = 0; i < gameArray.length; i++) {
            for (var j = 0; j < gameArray[i].length; j++) {
                if (gameArray[i][j] == 0) {
                    gameArray[i].splice(j, 1);
                    numsToCheck = 2;
                }
            }
        }
        numsToCheck--;
    }
}

function deepCopyArray(array) {
    var arrayCopy = new Array(array.length);
    for (var i = 0; i < array.length; i++) {
        arrayCopy[i] = new Array();
        for (var j = 0; j < array[i].length; j++) {
            arrayCopy[i].push(array[i][j]);
        }
    }
    return arrayCopy
}

function arraysEqual(arr1, arr2) {
    if(arr1.length != arr2.length)
        return false;
    for (var i = 0 ; i < arr2.length ; i++) {
        for (var j = 0 ; j < arr2[i].length ; j ++) {
            if (arr1[i][j] != arr2[i][j]) return false;
        }
    }
    return true;
}

function ExplodeSurroundingStones(gameArray, posX, posY) {
    for (var i = -1 ; i < 2 ; i++){
        for (var j = -1 ; j < 2 ; j++){
            if (Math.abs(i) == Math.abs(j)) continue;
            if(posX + i >= 0 && posX + i < gameArray.length && posY + j >= 0 && posY + j < gameArray[posX + i].length){
                if (gameArray[posX + i][posY + j] < 0){
                    gameArray[posX + i][posY + j]++;
                    if (gameArray[posX + i][posY + j] == 0){
                        gameArray[posX + i][posY + j] = Math.floor(Math.random() * 7 + 1);
                    }
                }
            }
        }
    }
}

function PushStones(gameArray) {
    for (i = 0; i < gameArray.length; i++) {
        gameArray[i].splice(0, 0, -2);
    }
}