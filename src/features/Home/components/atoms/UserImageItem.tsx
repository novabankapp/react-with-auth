
type UserImageItemProps = {
   image : string
}
export const UserImageItem = (props : UserImageItemProps) => {
    return (
        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
          <img src={props.image} alt="user profile photo" className="h-full w-full object-cover" />
       </span>
    )
}