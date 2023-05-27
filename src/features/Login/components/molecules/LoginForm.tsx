import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Button } from "../../../../common/components/atoms/Button"
import { Checkbox } from "../../../../common/components/atoms/Checkbox"
import { PasswordToggleField, TextField } from "../../../../common/components/atoms/Textfield"
import { GoogleButton } from "../atoms/GoogleButton"
import { useAuthenticationModelController } from '../../controllers/useAuthenticationModelController';
import { authenticationRepo } from '../../../../main';
import { RequestStatus } from '../../../../data/common';
import { REGISTRATION_PAGE } from '../../../../data/datasource/api/constant';
import { CredentialResponse, GoogleLogin, useGoogleLogin } from '@react-oauth/google';

type FormData = {
    email: string;
    password: string;
  };
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();
export const LoginForm = () => {
    const {signin,getGoogleUserInfo, fetchStatus} = useAuthenticationModelController(authenticationRepo)
    const [showPassword, toggleShowPassword] = useState<boolean>(false);
    const [googleToken,setGoogleToken] = useState<string| null>(null);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          email: '',
          password:""
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
        signin(data.email, data.password)
    }
    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
            setGoogleToken(tokenResponse.access_token)
            getGoogleUserInfo(googleToken!)
        },
        onError: error => console.log(error)
      });
    return (
        <>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*Sign in section */}               

                {/*Separator between social media sign in and email/password sign in */}
                <div  className="my-4 flex items-center ">
                    <p  className="mx-auto text-primary-600 text-xl mb-0 text-center font-bold dark:text-white">
                      Welcome Back
                    </p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error Logging in</p> : ""}
                </div>

                {/*Email input*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.email?.message}</p>
                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{ required: true, pattern: emailPattern }}
                                        render={({ field }) => <TextField  name={field.name} type="text" value={field.value} onChanged={field.onChange}   label="Email Address" placeholder="Email Address" />}
                    />
                </div>

                {/*Password input*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.password?.message}</p>
                    <Controller
                                        name="password"
                                        control={control}
                                        rules={{ required: true, pattern: emailPattern }}
                                        render={({ field }) => <PasswordToggleField toggleShow={() => toggleShowPassword(!showPassword)} show={showPassword}  name={field.name} type="password" value={field.value} onChanged={field.onChange}   label="Password" placeholder="Password" />}
                    />
                </div>

                <div className="mb-6 flex items-center justify-between">
                    {/*Remember me checkbox*
                    <Checkbox name="remember" label="Remember Me" value="" />*/}

                    {/*Forgot password link*/}
                    <Link className="text-primary-600 hover:text-primary-900" to="/recover">Forgot password?</Link>
                </div>

                {/*Login button*/}
                <div className="text-center lg:text-left">
                    <div className="w-full">
                    {fetchStatus == RequestStatus.Loading ? <div className='w-full bg-primary-600 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                    : <Button type="submit" title="Login" /> }
                    </div>

                    {/* Register link */}
                    <div className="w-full flex">
                        <p className="mb-0 mx-auto mt-2 pt-1 text-sm font-semibold">
                        Don't have an account?
                        <Link to={REGISTRATION_PAGE} className="ml-2 text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                            Register
                        </Link>
                        </p>
                    </div>
                    {/*<!-- Divider -->*/}
                    <div
                        className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                        </p>
                    </div>
                    <div>
                    {/*<!-- Social login buttons -->*/}
                    <div className="w-full">
                        <GoogleButton onClick={googleLogin} title="Login with Google" />
                        
                    </div>
                    </div>
                </div>
                </form>
        </>
    )
}