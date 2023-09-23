// import Board from './models/board.js';
const Board = require('./models/board');

// const gridSize = 10; // Specify the grid size
// const numberOfPits = 20; // Specify the number of pits
// const numberOfGold = 3; // Specify the number of gold items
// const numberOfWumpus = 2; // Specify whether the Wumpus is present
// const board = new Board(gridSize, numberOfPits, numberOfGold, numberOfWumpus);
// board.display();


// console.log("Moving Right");
// board.moveRight();
// board.display();

// console.log("Moving Down");
// board.moveDown();
// board.display();

// console.log("Moving Left");
// board.moveLeft();
// board.display();

// console.log("Moving Up");
// board.moveUp();
// board.display();




const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

let board;

const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello, Wumpus World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.route('/setBoardData').post( async(req, res) => {
    try{
        const numberOfPits = req.body.numberOfPits;
        const numberOfGolds = req.body.numberOfGolds;
        const numberOfWumpus = req.body.numberOfWumpus;

        board = new Board(10, numberOfPits, numberOfGolds, numberOfWumpus);

        console.log('G: ',numberOfGolds);
        console.log(board)
        res.json({board: board});
        
     } catch (err) {
       res.status(400).json('error getting board data from ui: ' + err);
     }
  });

  app.route('/findBestMove').post(async(req, res) => {
    try{

    console.log("Here to find best move");
    // board.display()
    move = board.findBestMove();

    return res.json({move: move});
    // return res.json({"msg": "move"});
    }
    catch (err) {
        res.status(502).json('internal server errrors: ');
        console.log(err)
    }
    
  })
  