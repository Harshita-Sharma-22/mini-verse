import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Notes({setActiveApp }){
    const [notes, setNotes]=useState(()=>{
        const saved = localStorage.getItem('miniverse_notes')
        return saved ? JSON.parse(saved) : []
    })
    

    const [activeNote, setActiveNote] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=> {
        localStorage.setItem('miniverse_notes', JSON.stringify(notes))
    }, [notes])

    const filteredNotes = notes.filter((note)=>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSave =()=>{
        if(!title.trim()) return

        if(activeNote){
            setNotes(
                notes.map((note)=>
                note.id === activeNote
            ? { ...note, title, content, updatedAt: new Date().toISOString() } : note)
            )
       } else {
        const newNote = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        setNotes([newNote, ...notes])
       }

       resetForm()
    }

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !==id))
        if (activeNote == id){
            resetForm()
        }
    }

    const handleNoteClick = (note)=> {
        setActiveNote(note.id)
        setTitle(note.title)
        setContent(note.content)
    }

    const resetForm = ()=> {
        setActiveNote(null)
        setTitle('')
        setContent('')
    }

    const formatDate = (dateString) =>{
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-100px)] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            
            <div className="w-full md:w-64 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                <div className="p-4">
                    <input type="text" 
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-600 dark:text-white"/>

                    <button onClick={resetForm}
                    className="w-full mb-4" 
                    //variant={activeNote ? 'outline' : 'primary'}
                    > 
                    New Note
                    </button>
                </div>
                
                <div className="overflow-y-auto h-[calc(100%-120px)]">
                    {filteredNotes.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400 p-4">
                            No notes found
                        </p>
                    ) : (
                        <ul>
                            {filteredNotes.map((note)=>(
                                <li key={note.id}
                                className={`p-3 border-b border-gray-200 dark:border-gray-600 cursor-pointer ${activeNote === note.id ? 'bg-purple-100 dark:bg-purple-900' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                                onClick={()=> handleNoteClick(note)}>
                                    <h3 className="font-medium text-gray-900 dark:text-white truncate">{note.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{note.content.substring(0,50)}
                                        {note.content.length > 50 && '...'}
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                        {formatDate(note.updatedAt)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <input type="text" 
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-xl font-semibold  w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"/>

                    {activeNote && (
                        <motion.button
                        whileTap={{scale: 0.9}} 
                        onClick={()=>handleDelete(activeNote)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 ml-2">
                        Delete
                        </motion.button>
                    )}
                   </div> 

                    <textarea 
                    placeholder="Start writing your note here...."
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    className="flex-1 p-4 resize-none focus:outline-none text-gray-800 dark:text-gray-200 dark:bg-gray-800"/>

                    <div className="p-4 border-t border-gray-200 dark:borer-gray-700 flex justify-end">
                        <button onClick={handleSave} disabled={!title.trim()}>
                            {activeNote ? 'Update' : 'Save'}
                        </button>
                    </div>
                        <button className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
                        onClick={()=>setActiveApp(null)}>
                            Go to Dashboard
                        </button>
                </div>
            </div>
    )
}
