import { AuthenticationDataSource } from "./data/datasource/sources/authentication/AuthenticationDataSource";
import { myContainer } from "./di/inversify.config";
import { TYPES } from "./di/types";
import { AuthenticationRepository } from "./domain/repositories/authentication/AuthenticationRepository";

export const authenticationDataSource= myContainer.get<AuthenticationDataSource>(TYPES.AuthenticationDataSource);
export const authenticationRepo  = myContainer.get<AuthenticationRepository>(TYPES.AuthenticationRepository);