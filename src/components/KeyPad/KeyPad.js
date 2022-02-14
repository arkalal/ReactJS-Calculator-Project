import React from 'react'
import './KeyPad.css'
import keys from './Keys'
import symbols from './Symbols'

const KeyPad = ({ handleKey }) => {
    return (
        <div className='keypad'>
            <div className="keypadKeys">
                {
                    keys.map((item, index) => {
                        return <>
                            <p onClick={() => { handleKey(item.keyCode, item.label) }} key={index}> {item.label} </p>
                        </>
                    })
                }
            </div>

            <div className="keypadSymbols">
                {
                    symbols.map((item, index) => {
                        return <>
                            <p onClick={() => { handleKey(item.keyCode, item.value) }} key={index}> {item.label} </p>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default KeyPad