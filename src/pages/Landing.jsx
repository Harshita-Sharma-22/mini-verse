import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalculatorIcon , CalendarIcon, SunIcon, ClipboardDocumentListIcon, DocumentTextIcon } from "@heroicons/react/24/outline"

const Landing=()=>{
    const features = [
        {
            title: 'Calculator',
            desc: 'Perform all basic calculations with ease',
            icon: CalculatorIcon
        },
        {
            title: 'Calender',
            desc: 'Manage your schedule and never miss an event',
            icon: CalendarIcon
        },
        {
            title: 'Weather',
            desc: 'Get real-time weather updates',
            icon: SunIcon
        },
        {
            title: 'Tasks',
            desc: 'Organize your to-dos with our task manager',
            icon: ClipboardDocumentListIcon
        },
        {
            title: 'Notes',
            desc: 'Jot down ideas and thoughts with markdown support',
            icon: DocumentTextIcon
        }
    ]


    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <header className="container mx-auto px-4 py-8">
                <nav className="flex justify-between items-center">
                    <motion.div 
                    initial ={{ opacity:0, y: -20 }}
                    animate={{ opacity:1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-purple-600"
                    >
                        MiniVerse
                    </motion.div>
                    <div className="flex gap-4">
                        <Link to="/login">
                            <button>
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button>
                                Register
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-20">
                    <motion.h1
                        initial={{opacity: 0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-5xl font-bold mb-6 text-gray-900"
                    >Your All-In-One <span className="text-purple-600">Mini Apps</span> Hub
                    </motion.h1>

                    <motion.p
                        initial={{ opacity:0 , y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.4}}
                        className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Streamline your productivity with our collection of essential mini applications, all in one beautiful interface.
                    </motion.p>

                    <motion.div
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.6}}
                        className="flex justify-center gap-4">
                        <Link to="/register">
                            <button>
                            Get Started
                            </button>
                        </Link>
                        <Link>
                        <button>
                            Explore
                        </button>
                        </Link>
                    </motion.div>
                </section>
                    
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index)=>{
                        const Icon = feature.icon
                        return (
                        <motion.div
                            key={feature.title}
                            initial={{opacity:0, y:20 }}
                            animate={{opacity:1, y:0}}
                            transition={{ duration: 0.5, delay:0.2 + index*0.1}}
                            whileHover={{ y: -5}}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                                <Icon className="w-10 h-10 text-purple-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.desc}
                            </p>
                        </motion.div>
                    )
                })} 
                </section>
            </main>
        </div>
    )
}
export default Landing