import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../common/components/atoms/Button"
import { TextField } from "../../../../common/components/atoms/Textfield"
import { authenticationRepo } from '../../../../main';
import { useCodeModelController, usePasswordModelController } from '../../controllers/useAuthenticationModelController';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../data/datasource/localstorage/store';
import { RequestStatus } from '../../../../data/common';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type FormData = {
    code: string;
  };
  const schema = yup.object({
    code: yup.string().required(),
  }).required();
export const EnterCodeForm = () => {
    const {verifyCode, fetchStatus, successful} = useCodeModelController(authenticationRepo);
    const {forgotPassword} = usePasswordModelController(authenticationRepo);
    const email = useSelector((state: RootState) => state.recoverEmail.email);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          code: '',
        }
      });
      const onResendCode = () => {
        if(email != null)
           forgotPassword(email)
      }
    const onSubmit = (data : FormData) => {
        console.log(data);
        if(email != null)
        verifyCode(email,data.code)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Sign in section */}               

                {/*Separator between social media sign in and email/password sign in */}
                <div  className="my-4 flex items-center flex-col">
                    <p  className="text-primary-600 text-xl mb-0 text-center font-bold dark:text-white">
                     Enter Code
                    </p>
                    <p  className=" text-primary-600 text-sm mb-0 text-center dark:text-white">
                      Enter the code you received in your mailbox
                    </p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error verifying code</p> : ""}
                </div>

                {/*Code input*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.code?.message}</p>
                    <Controller
                        name="code"
                        control={control}
                        render={({ field }) => <TextField  name={field.name} type="text" value={field.value} onChanged={field.onChange}   label="Code" placeholder="Code" />}
                    />
                                
                </div>
              
              
                {/*Enter code button*/}
                <div className="text-center lg:text-left">
                    <div className="w-full">
                    {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'>
                                <FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <Button disabled={false} type="submit" title='Verify Code' /> 
                            }   
                    </div>

                    <div className="w-full flex">
                        <p className="mb-0 mx-auto mt-2 pt-1 text-sm font-semibold">
                        Didn't receive the code?
                        <a
                            href="#!"
                            onClick={onResendCode}
                            className="ml-2 text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            >Resend Code</a>
                        </p>
                    </div>

                  
                </div>
                </form>
        </>
    )
}