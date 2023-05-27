import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenManager } from "../../../data/datasource/api/token";
import { userManager } from "../../../data/datasource/api/user";
import { removeUser, setRecoverEmail, setUser } from "../../../data/datasource/localstorage/userReducer";
import { AuthenticationRepository } from "../../../domain/repositories/authentication/AuthenticationRepository";
import { RequestStatus } from "../../../data/common";
import { HOMEPAGE } from "../../../data/datasource/api/constant";


export const useCodeModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const [successful, setSuccess] = useState<boolean>(true)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const resendCode = async (email: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.resendCode(email)
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const verifyCode = async (email : string, code: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.verifyCode({
           username: email,
            code: code
         })
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   return {
      verifyCode,
      resendCode,
      successful,
      fetchStatus
   }
}

export const usePasswordModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const [successful, setSuccess] = useState<boolean>(true)
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const resetPassword = async (email : string, password: string, code: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.resetPassword({
            username : email,
            code: code,
            password: password
         })
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }

   const changePassword = async (email : string, oldPassword: string, newPassword: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.changePassword({
            username : email,
            newPassword: newPassword,
            oldPassword: oldPassword
         })
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const forgotPassword = async (email : string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.forgotPassword(email)
         setSuccess(response.success)
         dispatch(setRecoverEmail(email))
         //go to enter code
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }


   }
   return {
     forgotPassword,
     changePassword,
     resetPassword,
     successful,
     fetchStatus
   }

}

export const useAuthenticationModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const [emailExists, setEmailExists] = useState<boolean>(true)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const logout = async () => {
      try{
         setFetchStatus(RequestStatus.Loading)
         await repository.logout()
         dispatch(removeUser())
        
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const emailCheck = async (email: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.emailExists(email)
         setEmailExists(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const getGoogleUserInfo = async (token: string) => {
      setFetchStatus(RequestStatus.Loading)
      try{
          const response = await repository.getGoogleUserInfo(token)
          await signup(response.email,response.family_name,response.email,"","")
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
  
   const signup = async(username: string, fullname: string, email : string, password : string, phoneNumber: string) => {
      
      try{
           setFetchStatus(RequestStatus.Loading)
           const response = await repository.signUp({
            username : username,
            fullname: fullname,
            email : email,
            password : password,
            phoneNumber : phoneNumber,
           })
           tokenManager.saveTokenObj(response.token ,response.refreshToken)
           userManager.saveUser(response.user)
           dispatch(setUser(response.user))
           setFetchStatus(RequestStatus.Success)
           navigate(HOMEPAGE)
          
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
  }
   const signin = async(email: string, password: string) => {
       console.log("In here")
       try{
            setFetchStatus(RequestStatus.Loading)
            const response = await repository.signin(email, password)
            tokenManager.saveTokenObj(response.token ,response.refreshToken)
            userManager.saveUser(response.user)
            dispatch(setUser(response.user))
            setFetchStatus(RequestStatus.Success)           
            navigate(HOMEPAGE)
           
       }
       catch(err : any){
          
          console.log(err.message)
           setFetchStatus(RequestStatus.Error)
       }
   }
   return {
      signin,
      signup,
      logout,
      emailCheck,
      getGoogleUserInfo,
      emailExists,
      fetchStatus,
   }
}