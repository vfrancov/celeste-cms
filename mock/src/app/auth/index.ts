import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import authRequest from "../auth/data/auth-request.json";
import { AuthController } from './controller/auth.controller';

export class AuthRouter {
    static init(server: Application): void {
        const authRequestData: RequestInfoDS = authRequest;
        server[authRequestData.method](authRequestData.url, AuthController.happyPath.bind(this));
    }
}