
type UserNameItemProps = {
    name: string
}
export const UserNameItem = (props : UserNameItemProps) => {
    return (
        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
          <span className="font-semibold">{props.name}</span>
        
        </div>
    )
}