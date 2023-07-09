import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Board from './components/Board';

describe("Rendering test of tic-tac-toe-board", () => {


  it("Should render a tic-tac-toe-board containing 9 squares", () => {
    render(<Board />);
    const squareComponent = screen.getAllByRole("button");
    expect(squareComponent).toHaveLength(9);

  });

  it("Should render a tic-tac-toe-board containing 3 rows", () => {
    render(<Board />);

    const boardRowComponent = screen.getAllByTestId("board-row");

    expect(boardRowComponent).toHaveLength(3);
  });

  it("Should render next player is X on status", () => {
    render(<Board />);

    const status = screen.getByText("Next Turn: X");

    expect(status).toBeInTheDocument();

  });

  it("Should render next player is O on status", () => {
    render(<Board />);
    fireEvent.click(screen.getByTestId("square-0"));

    const status = screen.getByText("Next Turn: O");

    expect(status).toBeInTheDocument();

  });


});


describe("tic-tac-toe-board functionality testing", () => {

  it("should render X on odd number of clicks", () => {

    render(<Board />);

    const index = parseInt(Math.random() * 8);
    const firstSquareIndex = "square-" + index;
    fireEvent.click(screen.getByTestId(firstSquareIndex));

    expect(screen.getByTestId(firstSquareIndex)).toHaveTextContent("X");

  });

  it("should render O on even number of clicks", () => {

    render(<Board />);

    const oddIndex = parseInt((Math.random() * 2) + 1);
    const evenIndex = oddIndex + 1;
    const oddClickIndex = "square-" + oddIndex;
    const evenClickIndex = "square-" + evenIndex;

    fireEvent.click(screen.getByTestId(oddClickIndex));
    fireEvent.click(screen.getByTestId(evenClickIndex));

    expect(screen.getByTestId(evenClickIndex)).toHaveTextContent("O");

  });


  it("should show status winner is X if X wins", () => {

    render(<Board />);

    const winningPoistionsForX = [0, 4, 8];
    const positionsForO = [1, 6];
    const maxTurnForXToWin = 5;
    let winningIndex = 0;
    let losingIndex = 0;

    for (let turn = 1; turn <= maxTurnForXToWin; ++turn) {

      let square = "";
      if (turn % 2 === 0) {
        square = "square-" + positionsForO[losingIndex++];
      } else {
        square = "square-" + winningPoistionsForX[winningIndex++];
      }

      fireEvent.click(screen.getByTestId(square));
    }



    const status = screen.getByText("winner is: X");

    expect(status).toBeInTheDocument();

  });


  it("should show status winner is O if O wins", () => {

    render(<Board />);

    // const status = screen.getByText("winner is: O");

    // expect(status).toBeInTheDocument();

  })


});