import React, {useReducer} from "react";

function Mood() {

    const initialState = {
        message: "happy"
    };

    function reducer(state, action) {
        switch(action.type) {
            case "hit":
                return {
                    message: `unhappy from ${state.message}`,
                }
            case "hug":
                return {
                    message: `happy from ${state.message}`, 
                }
            case "give":
                return {
                    message: `thankful from ${state.message}`,
                }
            default:
                return {
                    message: "confused"
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>Mood: {state.message}</p>
            <button onClick={() => dispatch({type: "hit"})}>HIT!</button>
            <button onClick={() => dispatch({type: "hug"})}>hug</button>
            <button onClick={() => dispatch({type: "give"})}>give gift!</button>
            <button onClick={() => dispatch({type: "shake"})}>shake</button>
        </>
    );
}

export default Mood;