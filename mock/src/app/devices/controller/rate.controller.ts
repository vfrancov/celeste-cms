import { BaseController } from "../../../core/base.controller";
import { Request, Response } from "express";
import { Logger } from "../../../core/libs/logger";
import DeviceAllResponse from "../data/devices-all.json";
import DeviceCreated from "../data/devices-create-response.json";
import DeviceUpdated from "../data/devices-update-response.json";
import DeviceGetById from "../data/devices-getbyid-response.json";
import DeviceDelete from "../data/devices-delete-response.json";

export class RateController extends BaseController {

  constructor() {
    super();
  }

  static happyPath(request: Request, response: Response): void {
    Logger.log("request", request.body);
    super.sendResponse(response, DeviceAllResponse);
  }

  static create(request: Request, response: Response): void {
    Logger.log("create", request.body);
    super.sendResponse(response, DeviceCreated);
  }

  static getbyid(request: Request, response: Response): void {
    Logger.log("getbyid", request.body);
    super.sendResponse(response, DeviceGetById);
  }

  static update(request: Request, response: Response): void {
    Logger.log("update", request.body);
    super.sendResponse(response, DeviceUpdated);
  }

  static delete(request: Request, response: Response): void {
    Logger.log("delete", request.body);
    super.sendResponse(response, DeviceDelete);
  }
}
