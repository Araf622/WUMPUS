// class Board {
//     constructor(gridSize, numberOfPits, numberOfGold, numberOfWumpus) {
//         this.gridSize = gridSize;
//         this.grid = new Array(gridSize);
//         this.currentRow = 0;
//         this.currentCol = 0;

//         for (let i = 0; i < gridSize; i++) {
//             this.grid[i] = new Array(gridSize).fill('');
//         }



//         this.placePits(numberOfPits);
//         this.placeGold(numberOfGold);
//         this.placeWumpus(numberOfWumpus);

//         // this.placeAgent(this.currentRow, this.currentCol);

//         this.addBreeze();
//         this.addStench();

//     }

//     moveLeft() {

//         if (this.isValidCoordinate(this.currentRow, this.currentCol - 1)) {


//             this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][this.currentCol].slice(0, -1);
//             this.currentCol -= 1;
//             this.grid[this.currentRow][this.currentCol] += 'A';
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     moveRight() {

//         if (this.isValidCoordinate(this.currentRow, this.currentCol + 1)) {


//             this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][this.currentCol].slice(0, -1);
//             this.currentCol += 1;
//             this.grid[this.currentRow][this.currentCol] += 'Agent';
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     moveUp() {

//         if (this.isValidCoordinate(this.currentRow - 1, this.currentCol)) {


//             this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][this.currentCol].slice(0, -1);
//             this.currentRow -= 1;
//             this.grid[this.currentRow][this.currentCol] += 'Agent';
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     moveDown() {

//         if (this.isValidCoordinate(this.currentRow + 1, this.currentCol)) {


//             this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][this.currentCol].slice(0, -1);
//             this.currentRow += 1;
//             this.grid[this.currentRow][this.currentCol] += 'Agent';
//             return true;
//         }
//         else {
//             return false;
//         }
//     }



//     addBreeze() {
//         console.log('addBreeze');
//         for (let i = 0; i < this.gridSize; i++) {
//             for (let j = 0; j < this.gridSize; j++) {
//                 if (this.grid[i][j] == "pit") {
//                     if (this.isValidCoordinate(i - 1, j)) {
//                         if (this.grid[i - 1][j] === "") {
//                             this.grid[i - 1][j] = 'breeze';

//                         }
//                         else if (this.grid[i - 1][j] === "gold") {
//                             this.grid[i - 1][j] = 'GB';
//                         }

//                     }

//                     if (this.isValidCoordinate(i, j - 1)) {

//                         if (this.grid[i][j - 1] === "") {
//                             this.grid[i][j - 1] = 'breeze';

//                         }
//                         else if (this.grid[i][j - 1] === "gold") {
//                             this.grid[i][j - 1] = 'GB';
//                         }
//                     }
//                     if (this.isValidCoordinate(i, j + 1)) {
//                         if (this.grid[i][j + 1] === "") {
//                             this.grid[i][j + 1] = 'breeze';

//                         }
//                         else if (this.grid[i][j + 1] === "gold") {
//                             this.grid[i][j + 1] = 'GB';
//                         }
//                     }
//                     if (this.isValidCoordinate(i + 1, j)) {
//                         if (this.grid[i + 1][j] === "") {
//                             this.grid[i + 1][j] = 'breeze';

//                         }
//                         else if (this.grid[i + 1][j] === "gold") {
//                             this.grid[i + 1][j] = 'GB';
//                         }
//                     }


//                 }

//             }

//         }

//     }


//     addStench() {
//         for (let i = 0; i < this.gridSize; i++) {
//             for (let j = 0; j < this.gridSize; j++) {
//                 if (this.grid[i][j] == "wumpus") {
//                     if (this.isValidCoordinate(i - 1, j)) {
//                         if (this.grid[i - 1][j] === "") {
//                             this.grid[i - 1][j] = 'stench';

//                         }
//                         else if (this.grid[i - 1][j] === "gold") {
//                             this.grid[i - 1][j] = 'GB';
//                         }
//                         else if ( this.grid[i - 1][j] === "breeze" ) {
//                             this.grid[i - 1][j] = 'breeze';
//                         }
//                         else if (this.grid[i - 1][j] === "GB") {
//                             this.grid[i - 1][j] = 'GB';
//                         }

//                     }

//                     if (this.isValidCoordinate(i, j - 1)) {

//                         if (this.grid[i][j - 1] === "") {
//                             this.grid[i][j - 1] = 'stench';

//                         }
//                         else if (this.grid[i][j - 1] === "gold" ) {
//                             this.grid[i][j - 1] = 'GS';
//                         }
//                         else if ( this.grid[i][j - 1] === "breeze") {
//                             this.grid[i][j - 1] = 'BS';
//                         }
//                         else if (this.grid[i][j - 1] === "GB") {
//                             this.grid[i][j - 1] = 'GBS';
//                         }
//                     }
//                     if (this.isValidCoordinate(i, j + 1)) {
//                         if (this.grid[i][j + 1] === "") {
//                             this.grid[i][j + 1] = 'stench';

//                         }
//                         else if (this.grid[i][j + 1] === "gold") {
//                             this.grid[i][j + 1] = 'GS';
//                         }
//                         else if (this.grid[i][j + 1] === "breeze") {
//                             this.grid[i][j + 1] = 'BS';
//                         }
//                         else if ( this.grid[i][j + 1] === "GB") {
//                             this.grid[i][j + 1] = 'GBS';
//                         }
//                     }
//                     if (this.isValidCoordinate(i + 1, j)) {
//                         if (this.grid[i + 1][j] === "") {
//                             this.grid[i + 1][j] = 'stench';

//                         }
//                         else if (this.grid[i + 1][j] === "gold" ) {
//                             this.grid[i + 1][j] = 'GS';
//                         }
//                         else if (this.grid[i + 1][j] === "breeze" ) {
//                             this.grid[i + 1][j] = 'BS';
//                         }
//                         else if ( this.grid[i + 1][j] === "GB") {
//                             this.grid[i + 1][j] = 'GBS';
//                         }
//                     }


//                 }

//             }

//         }

//     }

//     // generateRandomEnvironment(numberOfPits, numberOfGold, hasWumpus) {
//     //     this.clearBoard();

//     //     this.placePits(numberOfPits);
//     //     this.placeGold(numberOfGold);
//     //     if (hasWumpus) {
//     //         this.placeWumpus();
//     //     }
//     //     this.placeAgent(0, 0);
//     // }

//     setCell(x, y, content) {
//         if (this.isValidCoordinate(x, y)) {
//             this.grid[x][y] = content;
//         }
//     }

//     getCell(x, y) {
//         if (this.isValidCoordinate(x, y)) {
//             return this.grid[x][y];
//         }
//         return 'invalid';
//     }

//     isValidCoordinate(x, y) {
//         return x >= 0 && x < this.gridSize && y >= 0 && y < this.gridSize;
//     }

//     placePits(numberOfPits) {
//         for (let i = 0; i < numberOfPits; i++) {
//             const x = Math.floor(Math.random() * this.gridSize);
//             const y = Math.floor(Math.random() * this.gridSize);
//             if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 1 && y == 0)) {
//                 i--;
//                 continue;
//             }
//             this.setCell(x, y, 'pit');
//         }
//     }

//     placeGold(numberOfGold) {
//         for (let i = 0; i < numberOfGold; i++) {
//             const x = Math.floor(Math.random() * this.gridSize);
//             const y = Math.floor(Math.random() * this.gridSize);
//             this.setCell(x, y, 'gold');
//         }
//     }

//     placeWumpus(numberOfPits) {
//         for (let i = 0; i < numberOfPits; i++) {
//             const x = Math.floor(Math.random() * this.gridSize);
//             const y = Math.floor(Math.random() * this.gridSize);
//             this.setCell(x, y, 'wumpus');
//         }
//     }

//     placeAgent(x, y) {
//         this.setCell(x, y, 'agent');
//     }

//     display() {
//         for (let x = 0; x < this.gridSize; x++) {
//             let row = '';

//             for (let y = 0; y < this.gridSize; y++) {
//                 let cellContent = this.getCell(x, y);
//                 if (cellContent === '') {
//                     cellContent = '-';
//                 }
//                 row += cellContent + '\t';
//             }

//             console.log(row);
//         }
//     }
//     findBestMove(){

//         // actual logic..........................
//         const move = "RRRDD";
//         return move;
//     }
    

// }







// module.exports = Board;



/////*************************************************************************** */
const pitDanger = 2000;
const wumpusDanger = 400;

class Board {
    constructor(gridSize, numberOfPits, numberOfGold, numberOfWumpus) {
        this.gridSize = gridSize;
        this.grid = new Array(gridSize);
        this.currentRow = 0;
        this.currentCol = 0;
        this.arrow = 1;


        for (let i = 0; i < gridSize; i++) {
            this.grid[i] = new Array(gridSize).fill("");
        }

        this.visitedRooms = new Array(gridSize)
            .fill(null)
            .map(() => new Array(10).fill(false));
        this.dangerPerRoom = new Array(gridSize)
            .fill(null)
            .map(() => new Array(this.gridSize).fill(0));

        this.adjacentRooms = new Array();
        this.possibelPits = new Array();
        this.possibleWumpus = new Array();

        this.placePits(numberOfPits);
        this.placeGold(numberOfGold);
        this.placeWumpus(numberOfWumpus);

        this.placeAgent(this.currentRow, this.currentCol);

        this.addBreeze();
        this.addStench();
    }

    moveLeft() {
        if (this.isValidCoordinate(this.currentRow, this.currentCol - 1)) {



            this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][this.currentCol].slice(0, -1);
            this.currentCol -= 1;
            this.grid[this.currentRow][this.currentCol] += "A";
            return true;
        } else {
            return false;
        }
    }

    moveRight() {
        if (this.isValidCoordinate(this.currentRow, this.currentCol + 1)) {
            this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][
                this.currentCol
            ].slice(0, -1);
            this.currentCol += 1;
            this.grid[this.currentRow][this.currentCol] += "A";
            return true;
        } else {
            return false;
        }
    }

    moveUp() {
        if (this.isValidCoordinate(this.currentRow - 1, this.currentCol)) {
            this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][
                this.currentCol
            ].slice(0, -1);
            this.currentRow -= 1;
            this.grid[this.currentRow][this.currentCol] += "A";
            return true;
        } else {
            return false;
        }
    }

    moveDown() {
        if (this.isValidCoordinate(this.currentRow + 1, this.currentCol)) {
            this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][
                this.currentCol
            ].slice(0, -1);
            this.currentRow += 1;
            this.grid[this.currentRow][this.currentCol] += "A";
            return true;
        } else {
            return false;
        }
    }

    addBreeze() {
        console.log("addBreeze");
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                if (this.grid[i][j] == "P") {
                    if (this.isValidCoordinate(i - 1, j)) {
                        if (this.grid[i - 1][j] === "") {
                            this.grid[i - 1][j] = "B";
                        } else if (this.grid[i - 1][j] === "G") {
                            this.grid[i - 1][j] += "B";
                        }
                    }
                    if (this.isValidCoordinate(i, j - 1)) {
                        if (this.grid[i][j - 1] === "") {
                            this.grid[i][j - 1] = "B";
                        } else if (this.grid[i][j - 1] === "G") {
                            this.grid[i][j - 1] += "B";
                        }
                    }
                    if (this.isValidCoordinate(i, j + 1)) {
                        if (this.grid[i][j + 1] === "") {
                            this.grid[i][j + 1] = "B";
                        } else if (this.grid[i][j + 1] === "G") {
                            this.grid[i][j + 1] += "B";
                        }
                    }
                    if (this.isValidCoordinate(i + 1, j)) {
                        if (this.grid[i + 1][j] === "") {
                            this.grid[i + 1][j] = "B";
                        } else if (this.grid[i + 1][j] === "G") {
                            this.grid[i + 1][j] += "B";
                        }
                    }
                }
            }
        }
    }

    addStench() {
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                if (this.grid[i][j] == "W") {
                    if (this.isValidCoordinate(i - 1, j)) {
                        if (this.grid[i - 1][j] === "") {
                            this.grid[i - 1][j] = "S";
                        } else if (
                            this.grid[i - 1][j] === "G" ||
                            this.grid[i - 1][j] === "B" ||
                            this.grid[i - 1][j] === "GB"
                        ) {
                            this.grid[i - 1][j] += "S";
                        }
                    }

                    if (this.isValidCoordinate(i, j - 1)) {
                        if (this.grid[i][j - 1] === "") {
                            this.grid[i][j - 1] = "S";
                        } else if (
                            this.grid[i][j - 1] === "G" ||
                            this.grid[i][j - 1] === "B" ||
                            this.grid[i][j - 1] === "GB"
                        ) {
                            this.grid[i][j - 1] += "S";
                        }
                    }
                    if (this.isValidCoordinate(i, j + 1)) {
                        if (this.grid[i][j + 1] === "") {
                            this.grid[i][j + 1] = "S";
                        } else if (
                            this.grid[i][j + 1] === "G" ||
                            this.grid[i][j + 1] === "B" ||
                            this.grid[i][j + 1] === "GB"
                        ) {
                            this.grid[i][j + 1] += "S";
                        }
                    }
                    if (this.isValidCoordinate(i + 1, j)) {
                        if (this.grid[i + 1][j] === "") {
                            this.grid[i + 1][j] = "S";
                        } else if (
                            this.grid[i + 1][j] === "G" ||
                            this.grid[i + 1][j] === "B" ||
                            this.grid[i + 1][j] === "GB"
                        ) {
                            this.grid[i + 1][j] += "S";
                        }
                    }
                }
            }
        }
    }

    // generateRandomEnvironment(numberOfPits, numberOfGold, hasWumpus) {
    //     this.clearBoard();

    //     this.placePits(numberOfPits);
    //     this.placeGold(numberOfGold);
    //     if (hasWumpus) {
    //         this.placeWumpus();
    //     }
    //     this.placeAgent(0, 0);
    // }

    setCell(x, y, content) {
        if (this.isValidCoordinate(x, y)) {
            this.grid[x][y] = content;
        }
    }

    getCell(x, y) {
        if (this.isValidCoordinate(x, y)) {
            return this.grid[x][y];
        }
        return "invalid";
    }

    isValidCoordinate(x, y) {
        return x >= 0 && x < this.gridSize && y >= 0 && y < this.gridSize;
    }

    placePits(numberOfPits) {
        for (let i = 0; i < numberOfPits; i++) {
            const x = Math.floor(Math.random() * this.gridSize);
            const y = Math.floor(Math.random() * this.gridSize);
            if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 1 && y == 0)) {
                i--;
                continue;
            }
            this.setCell(x, y, "P");
        }
    }

    placeGold(numberOfGold) {
        for (let i = 0; i < numberOfGold; i++) {
            const x = Math.floor(Math.random() * this.gridSize);
            const y = Math.floor(Math.random() * this.gridSize);
            this.setCell(x, y, "G");
        }
    }

    placeWumpus(numberOfPits) {
        for (let i = 0; i < numberOfPits; i++) {
            const x = Math.floor(Math.random() * this.gridSize);
            const y = Math.floor(Math.random() * this.gridSize);
            this.setCell(x, y, "W");
        }
    }

    placeAgent(x, y) {
        // this.setCell(x, y, "A");
        this.currentRow = x;
        this.currentColumn = y;
        this.visitedRooms[x][y] = true;

        this.grid[x][y] += "A";


        if (this.isValidCoordinate(x - 1, y) && this.visitedRooms[x - 1][y] === false){

            console.log("pushing ", x-1, y);
            this.adjacentRooms.push([x - 1, y,0]);
        }
        if (this.isValidCoordinate(x, y - 1) && this.visitedRooms[x][y - 1] === false) {
            console.log("pushing ", x, y-1);
            this.adjacentRooms.push([x, y - 1,0]);
        }
        if (this.isValidCoordinate(x + 1, y) && this.visitedRooms[x + 1][y] === false) {
            console.log("pushing ", x+1, y);
            this.adjacentRooms.push([x + 1, y,0]);
        }
        if (this.isValidCoordinate(x, y + 1) && this.visitedRooms[x][y + 1] === false) {
            console.log("pushing ", x, y+1);
            this.adjacentRooms.push([x, y + 1,0]);
        }


    }

    display() {
        for (let x = 0; x < this.gridSize; x++) {
            let row = "";

            for (let y = 0; y < this.gridSize; y++) {
                let cellContent = this.getCell(x, y);
                if (cellContent === "") {
                    cellContent = "-";
                }
                row += cellContent + "\t";
            }

            console.log(row);
        }
    }

    displayVisited() {
        for (let x = 0; x < this.gridSize; x++) {
            let row = "";

            for (let y = 0; y < this.gridSize; y++) {
                // let cellContent = this.getCell(x, y);
                let cellContent = this.visitedRooms[x][y];
              
                row += cellContent + "\t";
            }

            console.log(row);
        }
    }
    findBestMove() {
        let arrow = 1;

        console.log("FindBestMove called");
        this.display();
        console.log("adjacency room : ", this.adjacentRooms);
        // console.log("Visison room : ", this.visitedRooms);
        // this.displayVisited();


        for( let i = 0; i < this.adjacentRooms.length;i ++){
            this.adjacentRooms[i][2] =  0;
        }


        let seenLists = new Set();

        // Filter out duplicates and update adjacencyRooms
        this.adjacentRooms = this.adjacentRooms.filter(room => {
            let stringifiedRoom = JSON.stringify(room);
            if (!seenLists.has(stringifiedRoom)) {
                seenLists.add(stringifiedRoom);
                return true;
            }
            return false;
        });


        console.log("uniques adjacentRooms", this.adjacentRooms);

        for (let i = 0; i < this.adjacentRooms.length; i++) {
            let breeze = 0;
            let stench = 0;
            let bs = 0;
            let x = this.adjacentRooms[i][0];
            let y = this.adjacentRooms[i][1];
            console.log("x=",x, "y=",y)
            if (this.isValidCoordinate(x - 1, y) && this.visitedRooms[x - 1][y]) {  //left
                if (this.grid[x - 1][y].includes("BS")) {
                    bs += 1;
                } else if (this.grid[x - 1][y].includes("B")) {
                    breeze += 1;
                } else if (this.grid[x - 1][y].includes("S")) {
                    stench += 1;
                }
            }

            if (this.isValidCoordinate(x, y - 1) && this.visitedRooms[x][y - 1]) {  //up
                if (this.grid[x][y - 1].includes("BS")) {
                    bs += 1;
                } else if (this.grid[x][y - 1].includes("B")) {
                    breeze += 1;
                } else if (this.grid[x][y - 1].includes("S")) {
                    stench += 1;
                }
            }
            if (this.isValidCoordinate(x + 1, y) && this.visitedRooms[x + 1] [y]) {  //right
                if (this.grid[x + 1][y].includes("BS")) {
                    bs += 1;
                } else if (this.grid[x + 1][y].includes("B")) {
                    breeze += 1;
                } else if (this.grid[x + 1][y].includes("S")) {
                    stench += 1;
                }
            }
            if (this.isValidCoordinate(x, y + 1) && this.visitedRooms[x][ y + 1] ){  //down
                if (this.grid[x][y + 1].includes("BS")) {
                    bs += 1;
                } else if (this.grid[x][y + 1].includes("B")) {
                    breeze += 1;
                } else if (this.grid[x][y + 1].includes("S")) {
                    stench += 1;
                }
            }

            // TODO:  Calculate Danger according to the number of breeze and stench values.............................

            let danger = 0
            if (breeze && stench) {
                danger = 0;
            }
            else if (breeze) {
                danger = pitDanger * (breeze + bs);
            }
            else if (stench) {
                if (arrow)
                    danger = wumpusDanger * (stench + bs);
                else
                    danger = pitDanger * (stench + bs);
            }
            else if (bs) {
                danger += pitDanger * bs;
            }

            console.log("adjacency:", this.adjacentRooms[x][y])
            this.adjacentRooms[i][2] = danger;
        }

        this.adjacentRooms.sort((a, b) => a[2] - b[2]);
        console.log("sorted adjacentRooms", this.adjacentRooms);
        
        let safestMove = [];
        safestMove[0] = this.adjacentRooms[0][0];
        safestMove[1] = this.adjacentRooms[0][1];
        // safestMove[2] = this.adjacentRooms[0][2];

        this.adjacentRooms.shift();



        console.log("safestMove: " + safestMove);

        this.grid[this.currentRow][this.currentCol] = this.grid[this.currentRow][this.currentCol].slice(0, -1);
        this.placeAgent(safestMove[0], safestMove[1]);
        // this.displayVisited()

        console.log("------------------------------------------------");

        return safestMove;
        

    }
}

module.exports = Board;