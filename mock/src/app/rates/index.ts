import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import { RateController } from './controller/rate.controller';
import RateRequest from './data/rate-request.json';
import CreateRate from './data/rate-create-request.json';
import UpdateRate from './data/rate-update-request.json';
import GetByIdRate from './data/rate-getbyid-request.json';
import DeleteRate from './data/rate-delete-request.json';

export class RatesRouter {
  static init(serve: Application): void {
    const rateRequest: RequestInfoDS = RateRequest;
    serve[rateRequest.method](rateRequest.url, RateController.happyPath.bind(this));
  }

  static create(serve: Application): void {
    const rateRequest: RequestInfoDS = CreateRate;
    serve[rateRequest.method](rateRequest.url, RateController.create.bind(this));
  }

  static getbyid(serve: Application): void {
    const rateRequest: RequestInfoDS = GetByIdRate;
    serve[rateRequest.method](rateRequest.url, RateController.getbyid.bind(this));
  }

  static update(serve: Application): void {
    const rateRequest: RequestInfoDS = UpdateRate;
    serve[rateRequest.method](rateRequest.url, RateController.update.bind(this));
  }

  static delete(serve: Application): void {
    const rateRequest: RequestInfoDS = DeleteRate;
    serve[rateRequest.method](rateRequest.url, RateController.delete.bind(this));
  }
}
