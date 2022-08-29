import {SuperJumpTracker} from "./components/SuperJumpTracker";
import {Grid} from "./components/Grid";
import {useGridData} from "./hooks/useGridData";
import {useState} from "react";

function App() {
    const rows = 3;
    const cols = 12;
    const {rotateBoard} = useGridData({row:0, col:0});
    const [dice, setDice] = useState(-1);
    const generateCols = (row) => {
        return (
            [...Array(cols).keys()].map(col =>
                <Grid key={row + "and" + col} row={row} col={col}/>
            )
        );
    }
    const gridIndices = [...Array(rows).keys()].map(row =>
        <div key={row} className={"grid-row"}>
            {generateCols(row)}
        </div>
    );
    console.log("re-rendering")
    return (
        <div>
            <div>
                {gridIndices}
            </div>
            <div>
              <SuperJumpTracker name="Player 1" initialValue={1} />
              <SuperJumpTracker name="Player 2" initialValue={1} />
              <SuperJumpTracker name="Player 3" initialValue={1} />
            </div>
            <br/>
            <button onClick={rotateBoard}>Rotate Board</button>
            <div>
                <span>Dice: {dice=== -1? "" : dice}</span>
                <button onClick={() => setDice(Math.floor(Math.random() * 6))}>Roll Dice</button>
            </div>
        </div>
    );
}

export default App;
