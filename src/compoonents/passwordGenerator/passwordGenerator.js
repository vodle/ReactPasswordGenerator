import React from "react";

import styles from './passwordGenerator.module.css'

import { Button} from '../../compoonents/button/button'
import { Checkbox } from '../../compoonents/checkbox/checkbox';
import { Input } from '../../compoonents/input/input'
import { Range } from '../../compoonents/range/range';

function PasswordGenerator(){

    let chars = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    const symbols = '!@#$%^&()_+?<>:{}[]'

    const [result, setResult] = React.useState('')
    const [passwordLenght, setPasswordLenght] = React.useState(12)
    const [isSymbols, setSymbols] = React.useState(false)
    const [isPasswordCopy, setPsswordCopy] = React.useState(false)

    function generatePassword(){
        if(isSymbols){
            chars += symbols
        }
        let rcesult = ''
        for(let i =0; i< passwordLenght; i++){
            let random = Math.floor(Math.random()* chars.length)
            rcesult += chars.substring(random, random+1)
        }
        console.log(rcesult)
        setResult(rcesult)
    }

    function chengesRange(event){ 
        console.log(passwordLenght)
        setPasswordLenght(event.target.value)
        
    }
    function isSymbolsUse(){
        setSymbols(!isSymbols)
    }
    function copyPassword(){
        if(result){
            let timerId = null
        navigator.clipboard.writeText(result).then(()=>{
            setPsswordCopy(true)
            timerId = setTimeout(()=>{
                setPsswordCopy(false) 
                clearTimeout(timerId)
            },2000)
        })
        }
    }


    return(
        <div className={styles.root}>
            <h1 className={styles.title}>генератор паролей</h1>
            <div className={styles.result}>
                <Input type="text" readOnly={true} defaultValue={result}></Input>
                <button className={styles.copy} onClick={copyPassword}>⎘</button>
                {isPasswordCopy &&<span className={styles.copied}>скопираванно</span>}
            </div>
            <div className={styles.options}>
                <span className={styles["symbols-choose"]}>{passwordLenght}</span>
                <Range id="choose" name="choose" min="12"  max="20" step="1" value={passwordLenght} defaultValue={12} onChange={chengesRange}></Range>
            </div>
            <div className={styles.options}>
                <label className={styles.labelcheky} htmlFor="checy">использовать спецсимволы</label>
                <Checkbox name="checy" id="checy" defaultCheced={false} onChange={isSymbolsUse}></Checkbox>
            </div>
            <Button type="button" onClick={generatePassword}>сгенерировать пароль</Button>
        </div>
    )
}

export {PasswordGenerator}