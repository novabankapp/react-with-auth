

import GoogleIcon from "../../../../assets/svgs/GoogleIcon.svg"
import { Button } from "../../../../common/components/atoms/Button"
import { Checkbox } from "../../../../common/components/atoms/Checkbox"
import { TextField } from "../../../../common/components/atoms/Textfield"
import { GoogleButton } from "../atoms/GoogleButton"
import { LoginForm } from "../molecules/LoginForm"

export const LoginPage = () => {
    return (
        <section className="h-screen">
            <div className="h-full">           
                <div className="g-6 flex h-full  flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 mx-auto md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 px-24">
                    <LoginForm />
                    </div>
                </div>
            </div>
        </section>
    )
}