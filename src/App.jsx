import React from 'react';
import './App.css';
import {Node} from "./Counter/Node";
import {useSelector} from "react-redux";

const App = () => {
    const nodesDataById = useSelector(({nodesReducer}) => nodesReducer.nodesDataById);
    const rootNodeId = useSelector(({nodesReducer}) => nodesReducer.rootNodeId);

    return (
        <Node nodesDataById={nodesDataById} nodeId={rootNodeId}/>
    );
}

export default App;
