import React, {useState} from "react";

function Checkbox()
{
    const [checked, setChecked] = useState(false)

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={()=> setChecked((checked) => !checked)}>
            </input>
            {checked ? "checked" : "not checked"}
        </>
    )
}

export default Checkbox;