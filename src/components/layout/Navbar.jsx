import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { ThemeContext } from "../../context/ThemeContext"
import Button from "../common/Button"
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const Navbar=()=>{
    const { user, logout } = useContext(AuthContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 w-full h-16 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                            MiniVerse
                        </span>
                    </div>
                    <div className="">
                        <button onClick={toggleTheme}
                        className="p-2 hover:bg-gray-100">
                            {theme === 'dark' ? (
                                <SunIcon className="h-5 w-5" /> )
                                : (<MoonIcon className="h-5 w-5"/>)}
                        </button>
                        {user && (
                            <>
                                <span className="text-gray-700 dark:text-gray-300">
                                    {user.name}
                                </span>
                                <button variant="outline" onClick={logout}>
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