import React, { useEffect, useRef } from 'react'
import './Header.css'

const Header = () => {

    const scrollPresent = useRef()

    useEffect(() => {
        scrollPresent.current.scrollIntoView()
    }, [])

    return (
        <div className='header customScroll'>
            <div className="headerHistory">
                <p>10 + 2</p>
                <p>10 + 3</p>
                <p>10 + 5</p>
            </div>

            <br />

            <div className="headerExpression customScroll">
                <p>10 + 56</p>
            </div>

            <br />

            <p ref={scrollPresent} className="headerResult">150</p>
        </div>
    )
}

export default Header