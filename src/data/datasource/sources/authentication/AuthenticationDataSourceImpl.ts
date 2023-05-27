import { injectable } from "inversify";
import { AuthenticationDataSource, GeneralResponse, GoogleUserResponse, PasswordChangeRequest, PasswordResetRequest, SignInRequest, SignInResponse, SignupRequest, SignupResponse, VerifyCodeRequest } from "./AuthenticationDataSource";
import { postAPI, getAPI } from "../../api/axios_instance";
import { GOOGLE_URL } from "../../api/constant";



@injectable()
export class AuthenticationDataSourceImpl implements AuthenticationDataSource{
    async getGoogleUserInfo(token: string): Promise<GoogleUserResponse> {
       return await getAPI<GoogleUserResponse>(`GOOGLE_URL?access_token=${token}`, {
        "Authorization" : `Bearer ${token}`
       })
    }
    emailExists(email: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    resetPassword(request: PasswordResetRequest): Promise<SignInResponse> {
      throw new Error("Method not implemented.");
    }
    verifyCode(request: VerifyCodeRequest): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    resendCode(username: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    forgotPassword(email: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    changePassword(request: PasswordChangeRequest): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    logout(): Promise<void> {
      throw new Error("Method not implemented.");
    }
    async signUp(request: SignupRequest): Promise<SignupResponse> {
      return await postAPI<SignupResponse>("User/signup", request)   
    }
   
    async signIn(request: SignInRequest): Promise<SignInResponse> {
      
      return await postAPI<SignInResponse>("User/signin", request)       
        
    }

}