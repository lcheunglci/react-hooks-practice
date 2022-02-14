import React from "react";
import {useInput} from '../hooks/useInput'

function ColorSoundMapper() {

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000")

    
    // prevents the page from reloading.
    const submit = (e) => {
        e.preventDefault();
        
        alert(`${titleProps.value} sounds like ${colorProps.value}`);
        resetTitle();
        resetColor();
    }

    return (
        <>
        <form onSubmit={submit}>
            <input
             {...titleProps}
             type="text"
             placeholder="Sound..." />
            <input
             {...colorProps}
             type="color" 
             />
            <button>Add</button>
        </form>
        </>
    );
}

export default ColorSoundMapper;