import { DashboardLink } from "../atoms/DashboardLink"
import GoogleIcon from "../../../../assets/svgs/GoogleIcon.svg"
import { useMenuState } from "../../../../data/datasource/localstorage/menuStateProvider"

export const NavItems = () => {
    const {selectedMenu, setSelectedMenu,menus} = useMenuState()

    return (
        <nav className="flex flex-col mx-4 my-6 space-y-4">
            {
                menus.map(m => <DashboardLink key={m.key} onSelected={() => setSelectedMenu(m.key)} selected={selectedMenu == m.key} label={m.title} url={m.route} icon={m.imgSrc} /> )
            }
           
          
        </nav>
    )
}