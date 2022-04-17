import { BaseController } from "../../../core/base.controller";
import { Request, Response } from 'express';
import { Logger } from "../../../core/libs/logger";
import zoneAllResponse from "../data/zone-all.json";

export class ZoneController extends BaseController {
    constructor() {
        super()
    }

    static happyPathZoneAll(request: Request, response: Response): void {
        Logger.log('request body', request.body);
        super.sendResponse(response, zoneAllResponse);
    }
}