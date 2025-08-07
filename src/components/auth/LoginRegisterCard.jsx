import { useState } from "react"
import { motion } from "framer-motion"
import { FiLogIn, FiUserPlus, FiArrowRight } from "react-icons/fi"
import { AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

const LoginRegisterCard =()=>{
    const navigate = useNavigate()
    
    const [isLogin, setIsLogin] = useState(true)
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange =(e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        //console.log(isLogin ? 'Logging in...' : 'Registering...', formData)
        
        if(isLogin) {
            const savedUser = JSON.parse(localStorage.getItem('user'))
            
            if(
            savedUser && 
            savedUser.email === formData.email &&
            savedUser.password === formData.password
            ) {
            alert("Login succcessful")
            navigate('/dashboard')
            } else {
            alert("Invalid email or password")
            }
        } else {
            if(formData.password !== formData.confirmPassword){
                alert("Passwords do not match!")
                return
            }
            
            localStorage.setItem('user', JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password
            }))

            alert("Registration succcessful. Please login now.")
            setIsLogin(true)
        }
    }

    return( 
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side -Visual Panel */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 p-8 flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
                    </div>  

                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            { isLogin ? 'Welcome Back!' : 'Hello, New User!' }
                        </h2>
                        <p className="text-white/90">
                            {isLogin ? 'Login to MiniVerse and continue your productivity journey.' : 'Join MiniVerse and boost your productivity.'}
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{scale:0.95}}
                        onClick={()=> setIsLogin(!isLogin)}
                        className="relative self-start flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all"
                        >
                            {isLogin ? (
                                <>
                                    <FiUserPlus size={18} />
                                        Create Account                                
                                </>
                            ) : (
                                <>
                                <FiLogIn size={18} />
                                Already Registered ?
                                </>
                            )}
                            <FiArrowRight size={18} className="ml-1" />  
                    </motion.button>      
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-10">
                    <AnimatePresence mode="wait">
                            <motion.div 
                            key={isLogin ? 'login' : 'register'}
                            initial={{opacity:0, x:20}}
                            animate={{opacity:1, x:0}}
                            exit={{opacity:0, x: -20}}
                            transition={{duration:0.3 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                    {isLogin ? 'Login' : 'Register'}
                                </h2>

                                <form onSubmit = {handleSubmit} className="space-y-5">
                                    {!isLogin && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Full Name
                                            </label>
                                            <input type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange} 
                                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            placeholder="Harshita Sharma"
                                            required={!isLogin}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <input type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                                        placeholder="your@email.com"
                                        required />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Password
                                        </label>
                                        <input type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                                        placeholder={"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}
                                        required />
                                    </div>

                                   {!isLogin && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Confirm Password
                                        </label>
                                        <input type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
                                        placeholder={"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}
                                        required />
                                    </div>
                                   )} 

                                   <motion.button 
                                   whileHover={{ scale: 1.02 }}
                                   whileTap={{scale: 0.98}}
                                   type="submit"
                                   className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
                                    {isLogin ? 'Login' : 'Create Account'}
                                   </motion.button>
                                </form>

                                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                                    {isLogin ? (
                                        <>
                                            Forget password?{' '}
                                            <button className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                                                Reset here
                                            </button>
                                        </>
                                    ) : ('By registering, you agree to our Terms and Privacy Policy')
                                }
                                </div>
                            </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
export default LoginRegisterCard