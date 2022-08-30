import {useGridData} from "../hooks/useGridData";
import {useState} from "react";
import "../styles/gridStyles.css";

export const Grid = ({row, col}) => {
    // console.log("re-rendering grid component");
    const {data, setCellPlayer, toggleCellBuilding, toggleCellSuperJump} = useGridData({row, col});
    if(data.building) {
        console.log(row, col, " has a building");
    }
    const [display, setDisplay] = useState(false);
    const handleClick = (e) => {
        setDisplay(!display);
    }
    return (
            <span className={data.building? "grid-cell-building": (data.superJump? "grid-cell-superjump": 'grid-cell')}>
                {data.player1 && <span>1 </span>}
                {data.player2 && <span>2 </span>}
                {data.player3 && <span>3 </span>}
                <button onClick={handleClick}>{display ? "Hide" : "Show"}</button>
                {display && <div className={"drop-down"}>
                    <button style={{fontSize: 15}} onClick={() => setCellPlayer({player1:true})}>Add Player 1</button>
                    <button style={{fontSize: 15}} onClick={() => setCellPlayer({player2:true})}>Add player 2</button>
                    <button style={{fontSize: 15}} onClick={() => setCellPlayer({player3:true})}>Add player 3</button>
                    <button style={{fontSize: 15}} onClick={() => setCellPlayer({player1:false})}>Remove Player 1</button>
                    <button style={{fontSize: 15}} onClick={() => setCellPlayer({player2:false})}>Remove player 2</button>
                    <button style={{fontSize: 15}} onClick={() => setCellPlayer({player3:false})}>Remove player 3</button>
                    <button style={{fontSize: 15}} onClick={() => toggleCellBuilding()}>Toggle Building</button>
                    <button style={{fontSize: 15}} onClick={()=> toggleCellSuperJump()}>Toggle Super Jump</button>
                </div>}
            </span>
    );
}