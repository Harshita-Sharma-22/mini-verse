import { CalculatorIcon, CalendarDateRangeIcon, ClipboardDocumentListIcon, DocumentTextIcon, HomeIcon, SunIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"

const Sidebar = ({ setActiveApp }) => {
   const navItems = [
        { name: 'Dashboard', id: null  , icon: HomeIcon },
        { name: 'Calculator', id: 'calculator' , icon: CalculatorIcon },
        { name: 'Calender', id: 'calender' , icon: CalendarDateRangeIcon },
        { name: 'Weather', id: 'weather' , icon: SunIcon },
        { name: 'Tasks', id: 'tasks' , icon: ClipboardDocumentListIcon },
        { name: 'Notes', id: 'notes' , icon: DocumentTextIcon },
   ]   
    
        return (
        <div className="w-64 h-screen bg-white dark:bg-gray-800 shadow-sm fixed left-0 top-16 pt-10 z-40">
            <div className="p-4">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button 
                                onClick={()=> setActiveApp(item.id)}
                                className= {`w-full flex items-center p-2 rounded-md text-left ${item.id === null ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`} 
                            >
                                <item.icon className="h-5 w-5 mr-3" /> 
                                <span>{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Sidebar

































// First we have used Navlink since we were roiunting the page , but noe we are going to use component so we wil use active 



// import { CalculatorIcon, CalendarDateRangeIcon, ClipboardDocumentListIcon, DocumentTextIcon, HomeIcon, SunIcon } from "@heroicons/react/24/outline"
// import { NavLink } from "react-router-dom"

// const Sidebar = () => {
//    const navItems = [
//         { name: 'Dashboard', path: '/dashboard'  ,icon: HomeIcon },
//         { name: 'Calculator', path: '/calculator' ,icon: CalculatorIcon },
//         { name: 'Calender', path: '/calender' ,icon: CalendarDateRangeIcon },
//         { name: 'Weather', path: '/weather' ,icon: SunIcon },
//         { name: 'Tasks', path: '/tasks' ,icon: ClipboardDocumentListIcon },
//         { name: 'Notes', path: '/notes' ,icon: DocumentTextIcon },
//    ]   
    
//         return (
//         <div className="w-64 h-screen bg-white dark:bg-gray-800 shadow-sm fixed left-0 top-16 pt-10 z-40">
//             <div className="p-4">
//                 <ul className="space-y-2">
//                     {navItems.map((item) => (
//                         <li key={item.name}>
//                             <NavLink 
//                                 to={item.path}
//                                 className={({ isActive }) => `flex items-center ${
//                                     isActive ? 'bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-indigo-400'
//                                     : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
//                                 }`
//                                 }
//                             >
//                                 <item.icon className="h-5 w-5 mr-3" /> 
//                                 <span>{item.name}</span>
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default Sidebar
