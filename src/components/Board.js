
import { useState } from "react";


function Board() {

    const [squareValues, setSquareValues] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    function squareValueSetter(i) {

        if (calculateWinner(squareValues) || squareValues[i])
            return;

        const temp = squareValues.slice();
        if (isXNext) {
            temp[i] = 'X';
        } else {
            temp[i] = 'O';
        }
        setIsXNext(!isXNext);
        setSquareValues(temp);
    }

    function calculateWinner(squareValues) {
        const winningPoistions = [
            // row-wise
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // column-wise
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonal-wise
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let position of winningPoistions) {

            let firstIndex = position[0];
            let secondIndex = position[1];
            let thirdIndex = position[2];

            if (squareValues[firstIndex] === squareValues[secondIndex] && squareValues[secondIndex] === squareValues[thirdIndex]) {
                return squareValues[firstIndex];
            }
        }

        return null;
    }

    let winner = calculateWinner(squareValues);
    let status;

    if (winner) {
        status = "winner is: " + winner;
    } else {
        status = "Next Turn: " + (isXNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">
                {status}
            </div>

            <div data-testid="board-row" className="board-row">

                <button
                    className="square"
                    data-testid="square-0"
                    onClick={
                        () => {
                            squareValueSetter(0);
                        }
                    }
                >
                    {squareValues[0]}
                </button>


                <button
                    className="square"
                    data-testid="square-1"
                    onClick={
                        () => {
                            squareValueSetter(1);
                        }
                    }
                >
                    {squareValues[1]}
                </button>

                <button
                    className="square"
                    data-testid="square-2"
                    onClick={
                        () => {
                            squareValueSetter(2);
                        }
                    }
                >
                    {squareValues[2]}
                </button>

            </div>

            <div data-testid="board-row" className="board-row" >
                <button
                    className="square"
                    data-testid="square-3"
                    onClick={
                        () => {
                            squareValueSetter(3);
                        }
                    }
                >
                    {squareValues[3]}
                </button>


                <button
                    className="square"
                    data-testid="square-4"
                    onClick={
                        () => {
                            squareValueSetter(4);
                        }
                    }
                >
                    {squareValues[4]}
                </button>

                <button
                    className="square"
                    data-testid="square-5"
                    onClick={
                        () => {
                            squareValueSetter(5);
                        }
                    }
                >
                    {squareValues[5]}
                </button>
            </div>

            <div data-testid="board-row" className="board-row">
               
                <button
                    className="square"
                    data-testid="square-6"
                    onClick={
                        () => {
                            squareValueSetter(6);
                        }
                    }
                >
                    {squareValues[6]}
                </button>


                <button
                    className="square"
                    data-testid="square-7"
                    onClick={
                        () => {
                            squareValueSetter(7);
                        }
                    }
                >
                    {squareValues[7]}
                </button>

                <button
                    className="square"
                    data-testid="square-8"
                    onClick={
                        () => {
                            squareValueSetter(8);
                        }
                    }
                >
                    {squareValues[8]}
                </button>
            
            </div>

        </>
    );
}


export default Board;