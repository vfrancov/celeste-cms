import { Request, Response } from "express";
import { BaseController } from "../../../core/base.controller";
import { Logger } from "../../../core/libs/logger";
import UserResponse from "../data/users-response-all.json"

export class UserController extends BaseController {

  constructor() {
    super()
  }

  static readAll(request: Request, response: Response): void {
    Logger.log("request", request.body);
    super.sendResponse(response, UserResponse);
  }
}
