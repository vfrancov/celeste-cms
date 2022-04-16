import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import createCompanie from '../companies/data/create-request.json';
import { CompanieController } from './controller/companie.controller';
import requestCompanie from './data/companie-request.json';

export class CompanieRouter {
    static init(server: Application): void {
        const companieRequestData: RequestInfoDS = createCompanie;
        server[companieRequestData.method](companieRequestData.url, CompanieController.happyPath.bind(this));
    }

    static companiesAll(server: Application): void {
        const companieRequest: RequestInfoDS = requestCompanie;
        server[companieRequest.method](companieRequest.url, CompanieController.happyPathCompanies.bind(this));
    }
}