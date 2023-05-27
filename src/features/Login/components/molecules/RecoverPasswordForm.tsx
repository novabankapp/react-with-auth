import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../common/components/atoms/Button"
import { TextField } from "../../../../common/components/atoms/Textfield"
import { authenticationRepo } from '../../../../main';
import { usePasswordModelController } from '../../controllers/useAuthenticationModelController';
import { RequestStatus } from '../../../../data/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


type FormData = {
    email: string;
  };
  const schema = yup.object({
    email: yup.string().email().required(),
  }).required();
export const RecoverPasswordForm = () => {
    const {forgotPassword, fetchStatus, successful} = usePasswordModelController(authenticationRepo);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          email: '',
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
        forgotPassword(data.email)
    }
    return (
        <>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*Sign in section */}               

                {/*Separator between social media sign in and email/password sign in */}
                <div  className="my-4 flex items-center flex-col">
                    <p  className="text-primary-600 text-xl mb-0 text-center font-bold dark:text-white">
                     Recover Password
                    </p>
                    <p  className=" text-primary-600 text-sm mb-0 text-center dark:text-white">
                      Enter the email you used to register and you will receive a code you received in your mailbox
                    </p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error Recovering password</p> : ""}
                    {successful ? <p className='text-white text-bold'>Check your mailbox for the reset code</p> : ""}
                </div>

                {/*email input*/}
                <div className="w-full flex flex-col">
                    <p className="text-red-600">{errors.email?.message}</p>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField  name={field.name} type="text" value={field.value} onChanged={field.onChange}   label="Email Address" placeholder="Email Address" />}
                    />
                                
                </div>
              
                
              
                {/*Enter code button*/}
                <div className="text-center lg:text-left">
                    <div className="w-full">
                    {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <Button disabled={false} type="submit" title='Send Code' /> 
                            }   
                       
                    </div>                   
                </div>
                </form>
        </>
    )
}