//src\store\actionsCreators\UserActionCreator.js
import { SUBSCRIBE, UNSUBSCRIBE } from "../actionTypes";
import store from "../store";

export const setUser = (name, age) => {
    return store.dispatch({
        type: SUBSCRIBE,
        payload: {
            userName: name,
            userAge: age
        },
    });
}

//unsubUser

export const unsubUser = (name, age) => {
    return store.dispatch({
        type: UNSUBSCRIBE,
        payload: {
            userName: "N-A",
            userAge: 0
        },
    });
}