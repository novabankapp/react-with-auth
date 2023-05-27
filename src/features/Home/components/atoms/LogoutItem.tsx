import { useDispatch } from "react-redux";
import { removeUser } from "../../../../data/datasource/localstorage/userReducer";
import { useAuthenticationModelController } from "../../../Login/controllers/useAuthenticationModelController";
import { authenticationRepo } from "../../../../main";

type LogoutItemProps = {

}
export const LogoutItem = (props: LogoutItemProps) => {
    const {logout} = useAuthenticationModelController(authenticationRepo)
    return (
        <button onClick={() => logout()}  className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                    <span className="sr-only">Log out</span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg> 
       </button>
    )
}