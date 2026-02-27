import React from 'react'
import useLocalStorage from './UseLocalStorage'

export default function Theme() {

    const [theme, setTheme] = useLocalStorage('theme', 'light')

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className="theme-container">
                <p className='para'>Hello World!</p>
                <button className='btn-theme' onClick={handleToggleTheme}> Change Theme</button>
            </div>
        </div>
    )
}
