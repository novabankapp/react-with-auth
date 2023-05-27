import { LogoutItem } from "../atoms/LogoutItem"
import { NotificationItem } from "../atoms/NotificationItem"
import { SearchBar } from "../atoms/SearchBar"
import { HumburgerMenu } from "../molecules/HumburgerMenu"
import { UserProfileItem } from "../molecules/UserProfileItem"
import userImage from "../../../../assets/images/header.png"
import { useSelector } from "react-redux"
import { RootState } from "../../../../data/datasource/localstorage/store"

type HeaderProps = {

}
export const Header = (props: HeaderProps) => {
    const user = useSelector((state: RootState) => state.user.user);
    return (
     <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
        <HumburgerMenu />
        <SearchBar />
        <div className="flex flex-shrink-0 items-center ml-auto">
            {user != null ? <UserProfileItem name={user.name} image={user.profilePicPath}/> : ""}
            <div className="border-l pl-3 ml-3 space-x-1 flex-row flex">
                <NotificationItem />
                <LogoutItem />
            </div>
        </div>
     </header>
    )
}