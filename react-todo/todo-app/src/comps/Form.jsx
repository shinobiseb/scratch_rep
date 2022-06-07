import React from "react";
import { useState } from "react/cjs/react.production.min";

const Form =  () => {
    const [value, setValue] = useState("")

    return <input value={value} onChange={e =>(e.target.value)}/>;
}

export default Form