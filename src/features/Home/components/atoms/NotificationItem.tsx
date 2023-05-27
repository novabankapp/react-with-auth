import { useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../../data/datasource/localstorage/store";

export const NotificationItem = () => {
    const [show, setShow] = useState(false)
    const notifications = useSelector((state: RootState) => state.notifications.currentNotifications);
    const hideStyle  = show ? " ": "hidden"
    console.log(notifications.length)
    return (
        <div className="relative">
            <button onClick={() => setShow(prev => !prev)} className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                    <span className="sr-only">Notifications</span>
                    {notifications.filter(n => !n.seen).length > 0 ? <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span> : <></>}
                    {notifications.filter(n => !n.seen).length > 0 ? <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>  : <></>}
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
            </button>
            
            <div onMouseLeave={() => setShow(false)} className={`mt-8 py-2 w-52 bg-white  rounded-lg shadow-xl absolute top-2.5 right-0 ${hideStyle} `}>
                <div className="divide-y">   
                    {notifications.map((n,i) =>{
                        const evenStyle = n.seen ? "": "bg-gray-100" 
                        return <a key={i} href="#" className={`${evenStyle}  block px-4 py-2 text-gray-800 hover:bg-primary-600 hover:text-white`}>{n.message}</a>    
                            
                    } )} 
                </div>
            </div>
        </div>
    )
}