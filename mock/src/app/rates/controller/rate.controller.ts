import { BaseController } from "../../../core/base.controller";
import { Request, Response } from "express";
import { Logger } from "../../../core/libs/logger";
import RateAllResponse from "../data/rate-all.json";
import RateCreated from "../data/rate-create-response.json";
import RateUpdated from "../data/rate-update-response.json";
import RateGetById from "../data/rate-getbyid-response.json";
import RateDelete from "../data/rate-delete-response.json";

export class RateController extends BaseController {

  constructor() {
    super();
  }

  static happyPath(request: Request, response: Response): void {
    Logger.log("request", request.body);
    super.sendResponse(response, RateAllResponse);
  }

  static create(request: Request, response: Response): void {
    Logger.log("create", request.body);
    super.sendResponse(response, RateCreated);
  }

  static getbyid(request: Request, response: Response): void {
    Logger.log("getbyid", request.body);
    super.sendResponse(response, RateGetById);
  }

  static update(request: Request, response: Response): void {
    Logger.log("update", request.body);
    super.sendResponse(response, RateUpdated);
  }

  static delete(request: Request, response: Response): void {
    Logger.log("delete", request.body);
    super.sendResponse(response, RateDelete);
  }
}
