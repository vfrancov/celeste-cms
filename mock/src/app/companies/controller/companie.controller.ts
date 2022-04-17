import { Request, Response } from 'express';
import { BaseController } from "../../../core/base.controller";
import { Logger } from "../../../core/libs/logger";
import companieAllResponse from "../data/companie-all-response.json";
import createCompanieResponse from "../data/create-response.json";

export class CompanieController extends BaseController {
    constructor() {
        super();
    }

    static happyPath(request: Request, response: Response): void {
        Logger.log('request body: ', request.body);
        super.sendResponse(response, createCompanieResponse);
    }

    static happyPathCompanies(request: Request, response: Response): void {
        Logger.log('request body', request.body);
        super.sendResponse(response, companieAllResponse)
    }
}