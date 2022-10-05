import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import { RateController } from './controller/rate.controller';
import DeviceRequest from './data/devices-request.json';
import createDevice from './data/devices-create-request.json';
import GetByIdDevice from './data/devices-getbyid-request.json';
import UpdateDevice from './data/devices-update-request.json';
import DeleteDevice from './data/devices-delete-request.json';

export class DevicesRouter {
  static init(serve: Application): void {
    const deviceRequest: RequestInfoDS = DeviceRequest;
    serve[deviceRequest.method](deviceRequest.url, RateController.happyPath.bind(this));
  }

  static create(serve: Application): void {
    const deviceRequest: RequestInfoDS = createDevice;
    serve[deviceRequest.method](deviceRequest.url, RateController.create.bind(this));
  }

  static getbyid(serve: Application): void {
    const deviceRequest: RequestInfoDS = GetByIdDevice;
    serve[deviceRequest.method](deviceRequest.url, RateController.getbyid.bind(this));
  }

  static update(serve: Application): void {
    const deviceRequest: RequestInfoDS = UpdateDevice;
    serve[deviceRequest.method](deviceRequest.url, RateController.update.bind(this));
  }

  static delete(serve: Application): void {
    const deviceRequest: RequestInfoDS = DeleteDevice;
    serve[deviceRequest.method](deviceRequest.url, RateController.delete.bind(this));
  }
}
