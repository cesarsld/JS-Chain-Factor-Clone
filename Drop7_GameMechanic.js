function GameExecution(gameArray) {

    for (i = 0; i < gameArray.length; i++) {
        var vertDiscCount = gameArray[i].length;
        for (j = 0; j < vertDiscCount; j++) {
            if (gameArray[i][j] == vertDiscCount) {
                //alert("disc exploded");
                gameArray[i][j] = 0;
            }

        }
    }
    //forloop to find disc procs on rows
    for (i = 0; i < gameArray.length; i++) {
        var chain = 0;
        for (j = 0; j <= gameArray.length; j++) {
            if (j < gameArray.length && gameArray[j].length >= i + 1) {
                chain++;
                //console.log("chain size: " + chain);
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
    for (i = 0; i < gameArray.length; i++) {
        for (j = 0; j < gameArray[i].length; j++) {
            if (gameArray[i][j] == 0) {
                //ExplodeSurroundingStones(gameArray, i, j);
            }
        }
    }
    //for loop to remove procced discs ; - 4 loops are needed to 
    var numsToCheck = 1;
    while (numsToCheck != 0)
    {
        for (i = 0; i < gameArray.length; i++) {
            for (j = 0; j < gameArray[i].length; j++) {
                if (gameArray[i][j] == 0) {
                    gameArray[i].splice(j, 1);
                    numsToCheck = 2;
                }
            }
        }
        numsToCheck--;
    }
    return gameArray;
}

functoin deepCopyArray()

function arraysEqual(arr1, arr2) {
    console.log ("equal method accessed");
    console.log("copy check");
            for (i = 0 ; i < arr2.length ; i++){
                for (j = 0 ; j < arr2[i].length ; j++){
                    console.log (arr2[i][j]);
                }
            }
            console.log("array check");
            for (i = 0 ; i < arr1.length ; i++){
                for (j = 0 ; j < arr1[i].length ; j++){
                    console.log (arr1[i][j]);
                }
            }
    if(arr1.length != arr2.length)
        return false;
    for (i = 0 ; i < arr1.length ; i++) {
        for (j = 0 ; j < arr1[i].length ; j ++) {
            //console.log("game arr = " + arr1[i][j] + "; coppy arr = " + arr2[i][j]);
            if (arr1[i][j] != arr2[i][j]) return false;
        }
    }

    return true;
}

function ExplodeSurroundingStones(gameArray, posX, posY) {
    var rowLength = gameArray[posX].length;
    if (rowLength > 1) {
        var yAdd = 0;
        //switch (posY) {
        //    case 0:
        //        yAdd++;
        //        break;
        //    case rowLength - 1:
        //        yAdd--;
        //        break;
        //    default:
        //        break;
        //}
        if (posY == 0) {
            if (gameArray[posX][posY + 1] < 0) {
                gameArray[posX][posY + 1]++;
                if (gameArray[posX][posY + 1] == 0) {
                    gameArray[posX][posY + 1] = Math.random() * 7 + 1;
                }
            }
        }
        else if (posY > 0 && posY < rowLength - 1) {
            if (gameArray[posX][posY - 1] < 0) {
                gameArray[posX][posY - 1]++;
                if (gameArray[posX][posY - 1] == 0) {
                    gameArray[posX][posY - 1] = Math.random() * 7 + 1;
                }
            }
            if (gameArray[posX][posY + 1] < 0) {
                gameArray[posX][posY + 1]++;
                if (gameArray[posX][posY + 1] == 0) {
                    gameArray[posX][posY + 1] = Math.random() * 7 + 1;
                }
            }
        }
        else if (posY == rowLength - 1) {
            if (gameArray[posX][posY - 1] < 0) {
                gameArray[posX][posY - 1]++;
                if (gameArray[posX][posY - 1] == 0) {
                    gameArray[posX][posY - 1] = Math.random() * 7 + 1;
                }
            }
        }
    }
    if (posX == 0) {
        if (gameArray[posX + 1].length - 1 >= posY) {
            if (gameArray[posX + 1][posY] < 0) {
                gameArray[posX + 1][posY]++;
                if (gameArray[posX + 1][posY] == 0) {
                    gameArray[posX + 1][posY] = Math.random() * 7 + 1;
                }
            }
        }
    }
    else if (posX > 0 && posX < gameArray.length)
    {
        if (gameArray[posX - 1].length - 1 >= posY) {
            if (gameArray[posX - 1][posY] < 0) {
                gameArray[posX - 1][posY - 1]++;
                if (gameArray[posX - 1][posY - 1] == 0) {
                    gameArray[posX - 1][posY - 1] = Math.random() * 7 + 1;
                }
            }
        }
        if (gameArray[posX + 1].length - 1 >= posY) {
            if (gameArray[posX + 1][posY] < 0) {
                gameArray[posX + 1][posY - 1]++;
                if (gameArray[posX + 1][posY - 1] == 0) {
                    gameArray[posX + 1][posY - 1] = Math.random() * 7 + 1;
                }
            }
        }
    }
    else if (posX == gameArray.length - 1) {
        if (gameArray[posX - 1].length - 1 >= posY) {
            if (gameArray[posX - 1][posY] < 0) {
                gameArray[posX - 1][posY]++;
                if (gameArray[posX - 1][posY] == 0) {
                    gameArray[posX - 1][posY] = Math.random() * 7 + 1;
                }
            }
        }
    }
}

//function CheckRow(row) {
//    var discCount = row.length;
//    for (j = 0; j < row.length; j++) {
//        if (row[j] == discCount) {
//            row[j] = 0;
//        }
//    }
//}

function PushStones(gameArray) {
    for (i = 0; i < gameArray.length; i++) {
        gameArray[i].splice(0, 0, -2);
    }
}