import {useState} from "react";

export const useGridData = ({row, col}) => {
    // initialize a javascript 2d array of 3 rows and 12 columns specifying the initial values for each cell
    let initialGrid = Array(3)
        .fill(null).map(() => Array(12).fill(null).map(() => ({player1: false, player2: false, player3: false, building: false, superJump: false})));

    // all players start at the same last column
    initialGrid[0][11].player1 = true;
    initialGrid[1][11].player2 = true;
    initialGrid[2][11].player3 = true;
    initialGrid[0][3].building = true;
    initialGrid[1][5].building = true;
    initialGrid[2][1].building = true;
    initialGrid[0][7].building = true;
    initialGrid[1][9].building = true;
    initialGrid[2][4].building = true;

    const [grid, setGrid] = useState(initialGrid);
    const setCellPlayer = ({player1, player2, player3}) => {
        let newGrid = [...grid];
        newGrid[row][col].player1 = player1!=null? player1 : grid[row][col].player1;
        newGrid[row][col].player2 = player2!=null? player2 : grid[row][col].player2;
        newGrid[row][col].player3 = player3!=null? player3 : grid[row][col].player3;
        setGrid(newGrid);
    }
    const toggleCellBuilding = () => {
        let newGrid = [...grid];
        newGrid[row][col].building = !grid[row][col].building;
        setGrid(newGrid);
    }

    const toggleCellSuperJump = () => {
        let newGrid = [...grid];
        newGrid[row][col].superJump = !grid[row][col].superJump;
        setGrid(newGrid);
    }

    const rotateBoard = () => {
        console.log("rotate board");
        let newGrid = [...grid];
        newGrid.forEach(gridRow => gridRow.unshift(gridRow.pop()));
        setGrid(newGrid);
    }

    return {
        data: grid[row][col],
        setCellPlayer,
        toggleCellBuilding,
        toggleCellSuperJump,
        rotateBoard,
    }
}