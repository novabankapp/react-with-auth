import { Container } from "inversify";
import "reflect-metadata";
import { AuthenticationDataSource } from "../data/datasource/sources/authentication/AuthenticationDataSource";
import { TYPES } from "./types";
import { AuthenticationDataSourceMock } from "../data/datasource/sources/authentication/AuthenticationDataSourceMock";
import { AuthenticationRepositoryImpl } from "../data/repositories/authentication/AuthenticationRepositoryImpl";
import { AuthenticationRepository } from "../domain/repositories/authentication/AuthenticationRepository";

const myContainer = new Container();
myContainer.bind<AuthenticationDataSource>(TYPES.AuthenticationDataSource).to(AuthenticationDataSourceMock);
myContainer.bind<AuthenticationRepository>(TYPES.AuthenticationRepository).to(AuthenticationRepositoryImpl);




export { myContainer };
