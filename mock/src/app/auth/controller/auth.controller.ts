import { Request, Response } from "express";
import { BaseController } from "../../../core/base.controller";
import { Logger } from "../../../core/libs/logger";
import authResponse from "../data/auth-response.json";

export class AuthController extends BaseController {
    constructor() {
        super()
    }

    static happyPath(request: Request, response: Response): void {
        Logger.log('request body', request.body);
        super.sendResponse(response, authResponse);
    }
}