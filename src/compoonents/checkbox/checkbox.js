import React from "react";

import styles from './checkbox.module.css'
function Checkbox({name, id, defaultCheced, onChange}){

    return(
        <input type="checkbox" name={name} id={id} defaultChecked={defaultCheced} onChange={onChange} className={styles.checkbox}></input>
    )

}

export {Checkbox}