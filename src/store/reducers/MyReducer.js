//src\store\reducers\MyReducer.js

import { SUBSCRIBE, UNSUBSCRIBE } from "../actionTypes";

const initialState = {
    userName: "N-A",
    userAge: 0
};

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case SUBSCRIBE: {
            let currState = { ...state };
            currState.userName = action.payload.userName;
            currState.userAge = action.payload.userAge;
            return currState;
        }
        case UNSUBSCRIBE: {
            let currState = { ...state };
            currState.userName = action.payload.userName;
            currState.userAge = action.payload.userAge;
            return currState;
        }
        default: {
            console.log("DEFAULT")
            let currState = { ...state };
            return currState;
        }
    }
};
export default reducers;
