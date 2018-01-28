function GameExecution(gameArray) {
    var isCombo = true;
    while (iscombo) {
        var copyOfArray = Array.from(gameArray);
        //for loop to find disc procs on each collumn
        for (i = 0; i < gameArray.length; i++) {
            var vertDiscCount = gameArray[i].length;
            for (j = 0; j < vertDiscCount; j++) {
                if (gameArray[i][j] == vertDiscCount) {
                    gameArray[i][j] = 0;
                }

            }
        }
        //forloop to find disc procs on rows
        for (i = 0; i < gameArray.length; i++) {
            for (j = 0; j < gameArray.length; j++) {
                var chain = 0;
                if (gameArray[j].length >= i + 1) {
                    chain++;
                }
                else {
                    for (k = j - chain; k < chain; k++) {
                        if (gameArray[k][i] == chain) {
                            gameArray[k][i] = 0;
                        }
                        chain = 0;
                    }
                }
            }
        } 
        //for loop to explode surrounding stones
        for (i = 0; i < gameArray.length; i++) {
            for (j = 0; j < gameArray[i].length; j++) {
                if (gameArray[i][j] == 0) {
                    ExplodeSurroundingStones(gameArray, i, j);
                }
            }
        }
        //for loop to remove procced discs ; - 4 loops are needed to 
        for (i = 0; i < gameArray.length; i++) {
            for (j = 0; j < gameArray[i].length; j++) {
                if (gameArray[i][j] == 0) {
                    gameArray[i].splice(j, 1);
                }
            }
        }
        if (gameArray == copyOfArray) isCombo = false;
    }
    return gameArray;
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
        if (gameArray[x + 1].length - 1 >= posY) {
            if (gameArray[posX + 1][posY] < 0) {
                gameArray[posX + 1][posY]++;
                if (gameArray[posX + 1][posY] == 0) {
                    gameArray[posX + 1][posY] = Math.random() * 7 + 1;
                }
            }
        }
    }
    else if (posX > 0 && poX < gameArray.length)
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