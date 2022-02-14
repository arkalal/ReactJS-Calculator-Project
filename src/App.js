import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import KeyPad from './components/KeyPad/KeyPad'
import { usedKeyCodes, numbers, operators } from './KeysToFunction'

const App = () => {

    const [IsDark, setIsDark] = useState(false)

    const [Expression, setExpression] = useState('')
    const [Result, setResult] = useState('')

    const handleKey = (keycode, key) => {
        if (!keycode) return

        if (!usedKeyCodes.includes(keycode)) return

        if (numbers.includes(key)) {
            if (key === '0') {
                if (Expression.length === 0) return
            }
            setExpression(Expression + key)
        }
        else if (operators.includes(key)) {
            if (Expression.length === 0) return
        }
        else if (keycode === 13) {
            console.log('enter')
        }
        else if (keycode === 8) {
            console.log('backspace');
        }
    }

    return (
        <div className='app' tabIndex='0' onKeyDown={(event) => { handleKey(event.keyCode, event.key) }} data-theme={IsDark ? 'dark' : ''}>
            <div className="appCalculator">
                <div className="appCalculatorNavbar">
                    <div className="appCalculatorNavbarToggle" onClick={() => { setIsDark(!IsDark) }}>
                        <div className={IsDark ? 'appCalculatorNavbarToggleCircle appCalculatorActiveToggle' : 'appCalculatorNavbarToggleCircle'}></div>
                    </div>

                    <img src={IsDark ? '/assets/moon.png' : '/assets/sun.png'} alt="" />
                </div>

                <Header></Header>
                <KeyPad handleKey={handleKey}></KeyPad>
            </div>
        </div>
    )
}

export default App