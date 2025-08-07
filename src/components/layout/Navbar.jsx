import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const Navbar=()=>{
    const [user, setUser] =useState(null)
    const [theme, setTheme] =useState("light")

    useEffect(()=>{
        const storedUser = JSON.parse(localStorage.getItem("user"))
        setUser(storedUser)

        const savedTheme = localStorage.getItem("theme")
        if(savedTheme) setTheme(savedTheme)
    }, [])

    const toggleTheme =()=>{
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme, newTheme")
        document.documentElement.classList.toggle("dark", newTheme == "dark")
    }

    const logout =()=>{
        localStorage.removeItem("user")
        window.location.href="/loginregister"
    }

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 w-full h-16 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                            MiniVerse
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleTheme}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            {theme === 'dark' ? (
                                <SunIcon className="h-5 w-5 text-white"/> )
                                : (<MoonIcon className="h-5 w-5 text-gray-800"/>)}
                        </button>
                        {user && (
                            <>
                                <span className="text-gray-700 dark:text-gray-300">
                                    {user.name}
                                </span>
                                <button onClick={logout}
                                className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'>
                                    Logout
                                </button>  
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
 export default Navbar