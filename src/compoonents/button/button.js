import React from "react"

import styles from './button.module.css'

function Button({type, onClick, children}){
    return(
        <button type={type} className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}
export {Button}