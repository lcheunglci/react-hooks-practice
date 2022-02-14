import React, {useReducer} from "react";

function Checkbox()
{
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false)

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}>
            </input>
            {checked ? "checked" : "not checked"}
        </>
    )
}

export default Checkbox;