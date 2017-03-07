function generateSpiralMatrix(m, n) {

    var value = 1;

    var minCol = 0;

    var maxCol = n - 1;

    var minRow = 0;

    var maxRow = m - 1;

    var spiral = {};

    while (value <= m * n) {
        for (var i = minCol; i <= maxCol; i++) {
	    if(!spiral[minRow]) spiral[minRow] = [];
            spiral[minRow][i] = value;

            value++;
        }

        for (var i = minRow + 1; i <= maxRow; i++) {

	    if(!spiral[i]) spiral[i] = [];
            spiral[i][maxCol] = value;

            value++;
        }

        for (var i = maxCol - 1; i >= minCol; i--) {
            spiral[maxRow][i] = value;

            value++;
        }

        for (var i = maxRow - 1; i >= minRow + 1; i--) {
            spiral[i][minCol] = value;

            value++;
        }
	console.log(spiral);
	debugger;

        minCol++;

        minRow++;

        maxCol--;

        maxRow--;
    }

    for (var i = 0; i < spiral.length; i++) {
        for (var j = 0; j < spiral.length; j++) {
            console.log(spiral[i][j] + "\t");
        }

        console.log("");
    }


}
generateSpiralMatrix(5,4);
