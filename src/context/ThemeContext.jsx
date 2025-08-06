import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children })=>{
    const [theme, setTheme] = useState('light')

    useEffect(()=>{
        const savedTheme = localStorage.getItem('miniverse_theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.classList.add(savedTheme)
    }, [])

    const toggleTheme=()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('miniverse_theme', newTheme)
        document.documentElement.classList.remove(theme)
        document.documentElement.classList.add(newTheme)
    }

    return(
        <ThemeContext.ThemeProvider value = {{ theme, toggleTheme }}>
            { children }
        </ThemeContext.ThemeProvider>
    )
}