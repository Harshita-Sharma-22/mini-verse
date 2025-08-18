export function Weather({setActiveApp}){
    return (
        <div>
            <button onClick={()=>{setActiveApp(null)}}>
                Do to Dashboard
            </button>
        </div>
    )
}