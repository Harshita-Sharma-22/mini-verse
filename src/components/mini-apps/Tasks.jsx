import { useState } from "react"

export function Tasks({ setActiveApp }) {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState("all")

    function addTask(text) {
        if(input.trim()==="")
            return
        const newTask ={
            id: Date.now(),
            text: input,
            completed: false
        }
        setTasks([...tasks, newTask])
        setInput("")
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const changeFilter = value => {
        setFilter(value)
    }

    const filteredTasks = tasks.filter(task =>{
        if (filter === "all") return true
        if (filter === "completed") return task.completed
        if (filter === "running") return !task.completed
    })

    return(
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
            <div className="flex gap-2 mb-4">
                <input type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new task..."
                className="flex-grow border rounded p-2"/>
                <button
                onClick={addTask}
                className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
            </div>
            <div className="flex gap-2 mb-4">
                <button onClick={()=> changeFilter("all")}
                className= {filter === "all" ? "font-bold" : ""}>All</button>
                <button onClick={()=> changeFilter("running")}
                className={filter ==="running" ? "font-bold" : ""}>Runing</button>
                <button onClick={()=> changeFilter("completed")}
                className={filter === "completed" ? "font-bold": ""}>Completed</button>
            </div>

            <ul className="space-y-2">
                {filteredTasks.map(task => (
                    <li key = {task.id}
                    className="flex justify-between items-center border p-2 rounded">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" 
                            checked={task.completed}
                            onChange={()=>toggleComplete(task.id)}/>
                            <span
                            style={{textDecoration: task.completed ? "line-through" : "none"}}>
                                {task.text}
                            </span>
                        </div>
                        <button onClick={()=> deleteTask(task.id)}
                            className="text-red-500">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <button
                onClick={()=> setActiveApp(null)}
                className="mt-6 bg-gray-500 text-white px-4 py-2 rounded">Go to Dashboard</button>
        </div>
    )
}