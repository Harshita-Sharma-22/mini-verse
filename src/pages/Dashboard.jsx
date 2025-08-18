import { useState } from "react"

import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import MiniCard from "../components/MiniCard"

import { Tasks } from "../components/mini-apps/Tasks"
import { Notes } from "../components/mini-apps/Notes"
import { Weather } from "../components/mini-apps/Weather"
import { Calculator } from "../components/mini-apps/Calculator"
import { Calender } from "../components/mini-apps/Calender"

const Dashboard =()=>{
    const [activeApp, setActiveApp] = useState(null)
    
    const miniApps =[
        {
            id: "tasks",
            title: "Task Manager",
            desc: "Manage your tasks efficiently",
            image: "/public/tasks.png",
            component: <Tasks setActiveApp={setActiveApp} />
        },
        {
            id: "weather",
            title: "Weather App",
            desc: "Check weather in your city",
            image: "/",
            component: <Weather setActiveApp={setActiveApp} />
        },
        {
            id: "calculator",
            title: "Calculator",
            desc: "Simple calculator tool",
            image: "/public/calculator.png",
            component: <Calculator setActiveApp={setActiveApp} />,
        },
        {
            id: "calender",
            title: "Calender",
            desc: "Manage your events",
            image: "/",
            component: <Calender setActiveApp={setActiveApp} />,
        },
        {
            id: "notes",
            title: "Notes",
            desc: "Write your creative thoughts here",
            image: "/public/notes.png",
            component: <Notes setActiveApp={setActiveApp} />,
        },

    ]

    const currentApp = miniApps.find((app)=> app.id === activeApp)

    return(
        <div className="flex h-screen">
            <Sidebar setActiveApp ={setActiveApp} />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <main className="mt-16 ml-64 p-4">
                    <div className="p-6 overflow-y-auto">
                        {!activeApp ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                            {miniApps.map(app=>(
                                <MiniCard 
                                    key = {app.id}
                                    title={app.title}
                                    desc={app.desc}
                                    image={app.image}
                                    onClick={()=> setActiveApp(app.id)}
                                />
                            ))}
                        </div>
                    ) : (
                        currentApp?.component
                    )
                }
                    </div>
                </main>
            </div>
        </div>   
    )
}
export default Dashboard