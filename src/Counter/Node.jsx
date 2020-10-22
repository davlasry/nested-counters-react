import React, {useState} from 'react';

export const Node = ({nodesDataById, nodeId}) => {
    const [counterValue, setCounterValue] = useState(0);

    return (
        <div>
            <div>
                <span>Counter: {counterValue}</span>
                <button onClick={() => setCounterValue(counterValue + 1)} style={{marginLeft: '5px'}}>+</button>
                <span onClick={() => setCounterValue(counterValue + 1)}
                      style={{marginLeft: '5px', color: 'grey'}}>x</span>
            </div>

            <ul>
                {(nodesDataById[nodeId].children || []).map((childId, index) =>
                    (<li key={index}>
                        <Node nodesDataById={nodesDataById} nodeId={childId}/>
                    </li>)
                )}
            </ul>
        </div>
    )
}
