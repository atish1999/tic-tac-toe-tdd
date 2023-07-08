
import { useState } from "react";
import Square from "./Square";


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
        status = "Nesxt Turn: " + (isXNext ? "X" : "O");
    }

    return (
        <>
            <div class="status">
                {status}
            </div>

            <div class="board-row">
                <Square
                    value={squareValues[0]}
                    handleClick={() => {
                        squareValueSetter(0);
                    }}
                />

                <Square
                    value={squareValues[1]}
                    handleClick={() => {
                        squareValueSetter(1);
                    }}
                />

                <Square
                    value={squareValues[2]}
                    handleClick={() => {
                        squareValueSetter(2);
                    }}
                />

            </div>

            <div class="board-row">
                <Square
                    value={squareValues[3]}
                    handleClick={() => {
                        squareValueSetter(3);
                    }}
                />

                <Square
                    value={squareValues[4]}
                    handleClick={() => {
                        squareValueSetter(4);
                    }}
                />

                <Square
                    value={squareValues[5]}
                    handleClick={() => {
                        squareValueSetter(5);
                    }}
                />
            </div>

            <div class="board-row">
                <Square
                    value={squareValues[6]}
                    handleClick={() => {
                        squareValueSetter(6);
                    }}
                />

                <Square
                    value={squareValues[7]}
                    handleClick={() => {
                        squareValueSetter(7);
                    }}
                />

                <Square
                    value={squareValues[8]}
                    handleClick={() => {
                        squareValueSetter(8);
                    }}
                />
            </div>

        </>
    );
}


export default Board;