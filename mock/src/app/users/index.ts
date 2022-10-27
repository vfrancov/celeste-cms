import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import { UserController } from './controller/user.controller';
import UserRequest from './data/users-request-all.json'

export class UserRouter {
  static readAll(serve: Application): void {
    const userRequest: RequestInfoDS = UserRequest;
    serve[userRequest.method](userRequest.url, UserController.readAll.bind(this));
  }
}
