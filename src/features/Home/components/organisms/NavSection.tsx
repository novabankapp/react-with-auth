import { Link } from "react-router-dom"
import { HOMEPAGE } from "../../../../data/datasource/api/constant"
import { useMenuState } from "../../../../data/datasource/localstorage/menuStateProvider"
import { NavItems } from "../molecules/NavItems"
import { SettingsItem } from "../molecules/SettingsItem"

export const NavSection = () => {
    const {selectedMenu, setSelectedMenu,menus} = useMenuState()
    return (
        <aside className="hidden sm:flex sm:flex-col bg-gray-800">
            {/*<Link to={HOMEPAGE} className="inline-flex items-center justify-center h-20 w-auto bg-primary-600 hover:bg-primary-400 focus:bg-primary-400">
                <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
                    <title>Company logo</title>
                    <path d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z" fill="#fff"/>
                </svg>
             </Link>*/}
            <div className="flex-grow flex flex-col mt-20 justify-between text-gray-500 ">
            <NavItems />
            <SettingsItem />
            </div>
       </aside>
    )
}