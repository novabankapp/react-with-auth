import { Link } from "react-router-dom"

type DashboardLinkProps = {
    label : string,
    key: string,
    icon : string,
    url : string,
    selected: boolean,
    onSelected: () => void
}
export const DashboardLink = ({label, icon, url,key,selected, onSelected} : DashboardLinkProps) => {
    const selectedStyle = selected ? "bg-gray-600" : ""
    return (
        <>
            
             <Link to={url} onClick={onSelected} className={`inline-flex items-center ${selectedStyle} justify-center py-3 px-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg`}>
                        <div className="flex flex-col items-center">                          
                          <img className="w-12 h-12 text-white" src={icon} loading="lazy" alt={`${label} picture`} />
                          <p className=" text-white">{label}</p>
                        </div>
            </Link>
        </>
    )
}