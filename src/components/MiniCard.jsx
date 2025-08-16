const MiniCard =({ image, title, desc, onClick })=>{

    return(
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md cursor-pointer transition overflow-hidden"
        onClick={onClick}>
            <div className="w-full h-64 overfow-hidden">
                <img src={image} alt={title}
                className="w-full h-full overflow-hidden mb-3"/>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{desc}</p>
                <button 
                    className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                        Let's Start 
                </button>
            </div>
        </div>
    )
} 
export default MiniCard