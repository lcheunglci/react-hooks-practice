import React, {useRef, useState} from "react";

function ColorSoundMapper() {

    const sound = useRef();
    // const color = useRef();
    const [color, setColor] = useState("#000000");

    // prevents the page from reloading.
    const submit = (e) => {
        e.preventDefault();
        const soundValue = sound.current.value;
        //const colorValue = color.current.value;

        alert(`${soundValue} sounds like ${color}`);
        sound.current.value = "";
        //color.current.value = "";
        setColor("#000000")
    }

    return (
        <>
        <form onSubmit={submit}>
            <input
             ref={sound}
             type="text"
             placeholder="Sound..." />
            <input
             value={color}
             type="color" 
             onChange={(e) => setColor(e.target.value)}
             />
            <button>Add</button>
        </form>
        </>
    );
}

export default ColorSoundMapper;