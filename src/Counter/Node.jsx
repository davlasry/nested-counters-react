import React, {useState} from 'react';
import {useSelector} from "react-redux";

export const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const nodesDataById = useSelector(({nodesReducer}) => nodesReducer.nodesDataById);
    console.log(nodesDataById);

    return (
        <div>
            <span>Counter: {counterValue}</span>
            <button onClick={() => setCounterValue(counterValue + 1)} style={{marginLeft: '5px'}}>+</button>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}
