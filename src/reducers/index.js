const initialState = {
    nodesDataById: {
        1: {
            counter: 0,
            children: [2, 3]
        },
        2: {
            counter: 1
        },
        3: {
            counter: 2,
            children: [4, 6]
        },
        4: {
            counter: 6,
            children: [5]
        },
        5: {
            counter: 1
        },
        6: {
            counter: 0
        }
    },
    rootNodeId: 1
}

export const nodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_NODE':
        // const newState =
        // return [
        //     ...state,
        // ]
        default:
            return state
    }
}
