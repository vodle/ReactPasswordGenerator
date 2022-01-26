import React from "react";
import {} from './range.module.css'

function Range({id, name, min, max, step,defaultValue, onChange}){

    return(
        <input type='range' id={id} name={name} min={min} max={max} step={step} defaultValue={defaultValue} onChange={onChange}></input>
    )

}
export {Range}