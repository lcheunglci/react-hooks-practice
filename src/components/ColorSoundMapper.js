import React, {useRef} from "react";

function ColorSoundMapper() {

    const sound = useRef();
    const color = useRef();

    // prevents the page from reloading.
    const submit = (e) => {
        e.preventDefault();
        const soundValue = sound.current.value;
        const colorValue = color.current.value;

        alert(`${soundValue} sounds like ${colorValue}`);
        sound.current.value = "";
        color.current.value = "";
    }

    return (
        <>
        <form onSubmit={submit}>
            <input
             ref={sound}
             type="text"
             placeholder="Sound..." />
            <input
             ref={color}
             type="color" />
            <button>Add</button>
        </form>
        </>
    );
}

export default ColorSoundMapper;