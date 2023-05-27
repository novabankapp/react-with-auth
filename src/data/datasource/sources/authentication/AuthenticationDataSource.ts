import { User } from "../../../../domain/models/authentication/User";
import IEntity from "../../api/ientity";


export type SignInRequest = {
    username : string,
    password:string,
}
export class SignInResponse implements IEntity {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}

export type SignupRequest = {
    username : string,
    fullname: string,
    email : string,
    password : string,
    phoneNumber : string,
}
export class SignupResponse implements IEntity {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}

export type VerifyCodeRequest = {
    username : string;
    code: string;
}
export class GeneralResponse implements IEntity{
    success! : boolean;
    message! : string;
}

export type PasswordChangeRequest = {
    username : string;
    newPassword: string;
    oldPassword: string;
}
export type PasswordResetRequest = {
    username : string;
    password: string;
    code: string;
}
export interface GoogleUserResponse {
    id: string
    email: string
    verified_email: boolean
    name: string
    given_name: string
    family_name: string
    picture: string
    locale: string
  }

export interface AuthenticationDataSource{
    signIn(request : SignInRequest) : Promise<SignInResponse>
    getGoogleUserInfo(token: string) : Promise<GoogleUserResponse>
    signUp(request: SignupRequest): Promise<SignupResponse>
    verifyCode(request : VerifyCodeRequest) : Promise<GeneralResponse>
    resendCode(username: string) : Promise<GeneralResponse>    
    emailExists(email: string) : Promise<GeneralResponse>
    resetPassword(request: PasswordResetRequest) : Promise<SignInResponse>
    changePassword(request: PasswordChangeRequest) : Promise<GeneralResponse>
    forgotPassword(email: string) : Promise<GeneralResponse>
    logout() : Promise<void>
}