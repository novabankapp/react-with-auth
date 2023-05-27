import { injectable, inject } from "inversify";
import { TYPES } from "../../../di/types";
import { AuthenticationRepository, Signup, Feedback, SignIn } from "../../../domain/repositories/authentication/AuthenticationRepository";
import { AuthenticationDataSource, SignupRequest, VerifyCodeRequest, PasswordResetRequest, PasswordChangeRequest, GoogleUserResponse } from "../../datasource/sources/authentication/AuthenticationDataSource";

@injectable()
export class AuthenticationRepositoryImpl implements AuthenticationRepository{
    private _dataSource : AuthenticationDataSource;
  
    public constructor(
        @inject(TYPES.AuthenticationDataSource) dataSource : AuthenticationDataSource
    ){
        this._dataSource = dataSource
    }
    async getGoogleUserInfo(token: string): Promise<GoogleUserResponse> {
       return this._dataSource.getGoogleUserInfo(token)
    }
    async signUp(request: SignupRequest): Promise<Signup> {
        const response = await this._dataSource.signUp(request)
        return response as Signup
    }
    
    async verifyCode(request: VerifyCodeRequest): Promise<Feedback> {
       const response = await this._dataSource.verifyCode(request)
       return response as Feedback
    }
    async resendCode(username: string): Promise<Feedback> {
        const response = await this._dataSource.resendCode(username)
        return response as Feedback
    }
    async forgotPassword(email: string): Promise<Feedback> {
       const response = await this._dataSource.forgotPassword(email)
       return response as Feedback
    }
    async emailExists(email: string): Promise<Feedback> {
        const response = await this._dataSource.emailExists(email);
        return response as Feedback;
    }
    async resetPassword(request: PasswordResetRequest): Promise<SignIn> {
        const result = await this._dataSource.resetPassword(request)
        return result as SignIn
    }
    async changePassword(request: PasswordChangeRequest): Promise<Feedback> {
        const result = await this._dataSource.changePassword(request);
        return result as Feedback
    }
    async logout(): Promise<void> {
        await this._dataSource.logout();
    }
    async signin(email: string, password: string): Promise<SignIn> {
       var response =  await this._dataSource.signIn({username : email, password: password});
       return response as SignIn
    }
}