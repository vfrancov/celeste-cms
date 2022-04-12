import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import createCompanie from '../companies/data/create-request.json';
import { CompanieController } from './controller/companie.controller';

export class CompanieRouter {
    static init(server: Application): void {
        const companieRequestData: RequestInfoDS = createCompanie;
        server[companieRequestData.method](companieRequestData.url, CompanieController.happyPath.bind(this));
    }
}