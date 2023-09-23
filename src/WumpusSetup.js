
import React, { useState } from 'react';
import { useEffect } from 'react';
import './WumpusSetup.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const numPitsInitialValue = '';
export const numGoldsInitialValue = '';
export const numWumpusInitialValue = '';

// export const initialBoard = '';


function WumpusSetup() {
  const navigate = useNavigate();

  const [numPits, setNumPits] = useState(numPitsInitialValue);
  const [numGolds, setNumGolds] = useState(numGoldsInitialValue);
  const [numWumpus, setNumWumpus] = useState(numWumpusInitialValue);
  const [isBoardLoaded, setIsBoardLoaded] = useState(false); // New state variable

  // const [Board, setBoard] = useState(Array.from({ length: 10 }, () =>
  //   Array.from({ length: 10 }, () => 'empty')
  // ));
  const [Board, setBoard] = useState([[]])
  const handleStartGame = async () => {
    if (numPits === '' || numGolds === '' || numWumpus === '') {
      alert('Please fill in all fields.');
      return;
    }
    setNumPits(parseInt(numPits));
    setNumGolds(parseInt(numGolds));
    setNumWumpus(parseInt(numWumpus));

    axios.post("http://localhost:5000/setBoardData", {
      numberOfPits: numPits,
      numberOfGolds: numGolds,
      numberOfWumpus: numWumpus     
    }).then((response) => {
      if (response) {
        console.log('Data:', response.data.board.grid);

        setBoard(response.data.board.grid);
        setIsBoardLoaded(true); // Signal that the board is loaded

        // console.log("Board : ", Board)

        // navigate('/WumpusGameBoard', {state:{Board}});


      }
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });



    // try {
    //   const response = await axios.post("http://localhost:5000/setBoardData",{
    //   numberOfPits: numPits,
    //   numberOfGolds: numGolds,
    //   numberOfWumpus: numWumpus
    // });
    //   console.log('Data:', response.data.board.grid);
    //   setBoard(response.data.board.grid);
    //   // const tempBoard = response.data.board.grid
    //   // const updateBoard = (tempBoard) => {
    //   //   setBoard(tempBoard);
    //   // };

      
    //   // updateBoard(tempBoard)
    //   console.log("Board : ", Board)
    // } catch (error) {
    //   // Handle any errors here
    //   console.error('Error:', error);
    // }
  }
    useEffect(() => {

      if (isBoardLoaded) {
        navigate('/WumpusGameBoard', { state: { Board } });
      }
  
    }, [Board, isBoardLoaded, navigate]);
  
  

  // useEffect(() => {
  //   // This code block will run after the component re-renders
  //   console.log("Board : ", Board);
  //   navigate('/WumpusGameBoard', {state:{Board}});

  // }, [Board]);
  

  return (
    <>
    <h2>Wumpus Game Setup</h2>

    <div className="wumpus-setup">
      <div>
        <label htmlFor="numPits">Number of Pits:</label>
        <input
          type="number"
          id="numPits"
          value={numPits}
          onChange={(e) => setNumPits(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numGolds">Number of Golds:</label>
        <input
          type="number"
          id="numGolds"
          value={numGolds}
          onChange={(e) => setNumGolds(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numWumpus">Number of Wumpus:</label>
        <input
          type="number"
          id="numWumpus"
          value={numWumpus}
          onChange={(e) => setNumWumpus(e.target.value)}
        />
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
    </>
  );
}

export default WumpusSetup;
