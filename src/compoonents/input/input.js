import React from "react";

import styles from './input.module.css'

function Input({type, placeHolder, defaultValue, disabled, readOnly}) {

    return(
        <input type={type} placeholder={placeHolder} defaultValue={defaultValue} disabled={disabled} readOnly={readOnly} className={styles.input}></input>
    )

}

export {Input}