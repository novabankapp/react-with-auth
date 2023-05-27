import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../common/components/atoms/Button"
import { Checkbox } from "../../../../common/components/atoms/Checkbox"
import { PasswordToggleField, TextField } from "../../../../common/components/atoms/Textfield"
import { GoogleButton } from "../atoms/GoogleButton"
import { authenticationRepo } from '../../../../main';
import { useAuthenticationModelController } from '../../controllers/useAuthenticationModelController';
import { RequestStatus } from '../../../../data/common';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LOGIN_PAGE } from '../../../../data/datasource/api/constant';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
type FormData = {
    email: string;
    fullname: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  };
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const schema = yup.object({
    email: yup.string().email().required(),
    fullname: yup.string().required(),
    phoneNumber: yup.string().required(),
    password: yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .required(),
    confimPassword: yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .oneOf([yup.ref("password")], "Passwords do not match").required(),
  }).required();
export const RegistrationForm = () => {
    const {signup,getGoogleUserInfo, fetchStatus} = useAuthenticationModelController(authenticationRepo);
    const [showPassword, toggleShowPassword] = useState<boolean>(false);
    const [googleToken,setGoogleToken] = useState<string| null>(null);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          email: '',
          fullname: '',
          phoneNumber: '',
          password: "",
          confirmPassword:""
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
           signup(data.email, data.fullname,data.email,data.password,data.phoneNumber)
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
               <form  onSubmit={handleSubmit(onSubmit)}>
                {/*Sign in section */}               

                {/*Separator between social media sign in and email/password sign in */}
                <div  className="my-4 flex items-center ">
                    <p  className="mx-auto text-primary-600 text-xl mb-0 text-center font-bold dark:text-white">
                      Register
                    </p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error verifying code</p> : ""}
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

                {/*Fullname*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.fullname?.message}</p>
                    <Controller
                                        name="fullname"
                                        control={control}
                                        rules={{ required: true, pattern: emailPattern }}
                                        render={({ field }) => <TextField  name={field.name} type="text" value={field.value} onChanged={field.onChange}   label="Fullname" placeholder="Fullname" />}
                    />
                </div>
                {/*phonenumber*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.fullname?.message}</p>
                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        rules={{ required: true, pattern: emailPattern }}
                                        render={({ field }) => <TextField  name={field.name} type="text" value={field.value} onChanged={field.onChange}   label="Phone Number" placeholder="Phone Number" />}
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

                {/*Password confirm input*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.password?.message}</p>
                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        rules={{ required: true, pattern: emailPattern }}
                                        render={({ field }) => <PasswordToggleField toggleShow={() => toggleShowPassword(!showPassword)} show={showPassword}  name={field.name} type="password" value={field.value} onChanged={field.onChange}   label="Password" placeholder="Password" />}
                    />
                </div>

               

                {/*Registration button*/}
                <div className="text-center lg:text-left">
                    <div className="w-full">
                    {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'>
                                <FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <Button disabled={false} type="submit" title='Register' /> 
                            }   
                    </div>

                    {/* Register link */}
                    <div className="w-full flex">
                        <p className="mb-0 mx-auto mt-2 pt-1 text-sm font-semibold">
                        Already have an account?
                        <Link to={LOGIN_PAGE}
                            className="ml-2 text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            >Login</Link>
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
                        <GoogleButton onClick={googleLogin} title="Register with Google" />
                    </div>
                    </div>
                </div>
                </form>
        </>
    )
}