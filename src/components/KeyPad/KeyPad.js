import React from 'react'
import './KeyPad.css'
import keys from './Keys'
import symbols from './Symbols'

const KeyPad = () => {
    return (
        <div className='keypad'>
            <div className="keypadKeys">
                {
                    keys.map((item, index) => {
                        return <>
                            <p key={index}> {item.label} </p>
                        </>
                    })
                }
            </div>

            <div className="keypadSymbols">
                {
                    symbols.map((item, index) => {
                        return <>
                            <p key={index}> {item.label} </p>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default KeyPad