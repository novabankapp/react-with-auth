import { UserImageItem } from "../atoms/UserImageItem"
import { UserNameItem } from "../atoms/UserNameItem"

type UserProfileItemProps = {
    name: string,
    image: string
}
export const UserProfileItem = (props : UserProfileItemProps) => {
    return (
        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
        <span className="sr-only">User Menu</span>
        <UserNameItem name={props.name} />
        <UserImageItem image={props.image} />
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg> 
        </button>
    )
}