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

  })

  it("should render O on even number of clicks", () => {

    render(<Board />);

    const oddIndex = parseInt((Math.random() * 2) + 1);
    const evenIndex = oddIndex + 1;
    const oddClickIndex = "square-" + oddIndex;
    const evenClickIndex = "square-" + evenIndex;
    
    fireEvent.click(screen.getByTestId(oddClickIndex));
    fireEvent.click(screen.getByTestId(evenClickIndex));

    expect(screen.getByTestId(evenClickIndex)).toHaveTextContent("O");

  })

});