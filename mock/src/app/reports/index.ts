import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import { ReportController } from './controller/reports.controller';
import reportRequest from "./data/report-request.json";

export class ReportsRouter {
  static init(server: Application): void {
    const report: RequestInfoDS = reportRequest;
    server[report.method](report.url, ReportController.happyPath.bind(this));
  }
}
