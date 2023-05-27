import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../common/components/atoms/Button"
import { TextField } from "../../../../common/components/atoms/Textfield"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../data/datasource/localstorage/store';
import { authenticationRepo } from '../../../../main';
import { usePasswordModelController } from '../../controllers/useAuthenticationModelController';
import { RequestStatus } from '../../../../data/common';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type FormData = {
    oldPassword: string;
    password: string;
    confirmPassword: string;
  };
  const schema = yup.object({
    oldPassword: yup.string().required(),
    password: yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .required(),
    confimPassword: yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .oneOf([yup.ref("password")], "Passwords do not match").required(),
  }).required();
export const ChangePasswordForm = () => {
    const email = useSelector((state: RootState) => state.recoverEmail.email);
    const {changePassword, fetchStatus, successful} = usePasswordModelController(authenticationRepo);
    const [showPassword, toggleShowPassword] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          oldPassword: '',
          password: "",
          confirmPassword:""
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
        if(email != null)
           changePassword(email,data.oldPassword, data.password)
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
            {/*Sign in section */}               

            {/*Separator between social media sign in and email/password sign in */}
            <div  className="my-4 flex items-center flex-col">
                <p  className="text-primary-600 text-xl mb-0 text-center font-bold dark:text-white">
                Change Password
                </p>
                {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error Recovering password</p> : ""}
                {successful ? <p className='text-white text-bold'>Check your mailbox for the reset code</p> : ""}
            </div>

            {/*Password input*/}
            <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.oldPassword?.message}</p>
                    <Controller
                        name="oldPassword"
                        control={control}
                        render={({ field }) => <TextField  name={field.name} type="password" value={field.value} onChanged={field.onChange}  placeholder="Old Password" label="Old Password" />}
                    />
                                
            </div>
            {/*Password input*/}
            <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.oldPassword?.message}</p>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <TextField  name={field.name} type="password" value={field.value} onChanged={field.onChange}  placeholder="New Password" label="New Password" />}
                    />
                                
            </div>
            {/*Password confirm input*/}
            <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.oldPassword?.message}</p>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => <TextField  name={field.name} type="password" value={field.value} onChanged={field.onChange}  placeholder="Confirm Password" label="Confirm Password" />}
                    />
                                
            </div>
            {/*Enter code button*/}
            <div className="text-center lg:text-left">
                <div className="w-full">
                {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <Button disabled={false} type="submit" title='Save Password' /> 
                 }  
                </div>          
            </div>
    </form>
    )
}