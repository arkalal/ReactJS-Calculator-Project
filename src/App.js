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
                if (!Expression) return
            }

            calculateResult(Expression + key)
            setExpression(Expression + key)
        }
        else if (operators.includes(key)) {
            if (!Expression) return

            const lastChar = Expression.slice(-1)

            if (operators.includes(lastChar)) return
            if (lastChar === '.') return

            setExpression(Expression + key)
        }
        else if (key === '.') {
            if (!Expression) return

            const lastChar = Expression.slice(-1)

            if (!numbers.include(lastChar)) return
            if (operators.include(lastChar)) return

            setExpression(Expression + key)
        }
        else if (keycode === 13) {
            if (!Expression) return

            calculateResult(Expression)
        }
        else if (keycode === 8) {
            if (!Expression) return

            calculateResult(Expression.slice(0, -1))
            setExpression(Expression.slice(0, -1))
        }
    }

    const calculateResult = (exp) => {
        if (!exp) return

        const lastChar = exp.slice(-1)

        if (!numbers.includes(lastChar)) {
            exp.slice(0, -1)
        }

        // eslint-disable-next-line no-eval
        const result = eval(exp).toFixed(2) + ''
        setResult(result)
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

                <Header Expression={Expression} result={Result}></Header>
                <KeyPad handleKey={handleKey}></KeyPad>
            </div>
        </div>
    )
}

export default App