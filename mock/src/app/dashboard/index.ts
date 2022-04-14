import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import { DashboardController } from './controller/dashboard.controller';
import dashboardRequest from "./data/dashboard-request.json";

export class DashboardRouter {
    static init(server: Application): void {
        const dashboard: RequestInfoDS = dashboardRequest;
        server[dashboard.method](dashboard.url, DashboardController.happyPath.bind(this));
    }
}