import {useState} from "react";

export const SuperJumpTracker = ({name, initialValue}) => {
    const [superJumps, setSuperJumps] = useState(initialValue);
    const incrementSuperJumps = () => {
        setSuperJumps(superJumps + 1);
    }
    const decrementSuperJumps = () => {
        setSuperJumps(superJumps - 1 >= 0?0 : 0);
    }
    return (
        <div>
            <p>{name} has {superJumps} super jumps</p>
            <button onClick={incrementSuperJumps}>+</button>
            <button onClick={decrementSuperJumps}>-</button>
        </div>
    );
}