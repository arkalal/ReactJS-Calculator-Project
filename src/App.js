import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import KeyPad from './components/KeyPad/KeyPad'

const App = () => {

    const [IsDark, setIsDark] = useState(false)

    return (
        <div className='app' data-theme={IsDark ? 'dark' : ''}>
            <div className="appCalculator">
                <div className="appCalculatorNavbar">
                    <div className="appCalculatorNavbarToggle" onClick={() => { setIsDark(!IsDark) }}>
                        <div className={IsDark ? 'appCalculatorNavbarToggleCircle appCalculatorActiveToggle' : 'appCalculatorNavbarToggleCircle'}></div>
                    </div>

                    <img src={IsDark ? '/assets/moon.png' : '/assets/sun.png'} alt="" />
                </div>

                <Header></Header>
                <KeyPad></KeyPad>
            </div>
        </div>
    )
}

export default App