import GoogleIcon from "../../../../assets/svgs/GoogleIcon.svg"

type GoogleButtonProps = {
    title : string,
    onClick?: () => void
}

export const GoogleButton = ({title, onClick}: GoogleButtonProps) => {
    return (
        <>
           <button onClick={onClick} className="w-full py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 
                              hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <div className="mx-auto flex flex-row items-center">
                    <img className="w-6 h-6" src={GoogleIcon} loading="lazy" alt="google logo" />
                    <span>{title}</span>
                </div>
            </button>
        </>
    )
}