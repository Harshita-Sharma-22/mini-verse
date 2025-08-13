import { useState } from "react"

export function Calculator({ setActiveApp }) {
    const [input, setInput] = useState("")

    const handleClick = (value) => setInput((prev) => prev + value)
    const handleClear =()=> setInput("")
    const handleCalculate = ()=> {
        try{
            setInput(eval(input).toString())
        } catch {
            setInput("Error")
        }
    }

    return (
        <div className="bg-white dark:gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">
                Calculator
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-right text-lg mb-4">
                {input || "0"}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {[7,8,9,"/",4,5,6,"*",1,2,3,"-",0,".","=","+"].map((btn) => (
                    <button key={btn}
                        onClick={()=> btn === "=" ? handleCalculate() : handleClick(btn.toString())}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded">
                        {btn}
                    </button>
                ))}
                <button onClick={handleClear}
                className="col-span-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded">
                    Clear
                </button>
            </div>
            <button onClick={()=> setActiveApp(null)}
                className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded">
                Go to Dashboard 
            </button>
        </div>
    )
}