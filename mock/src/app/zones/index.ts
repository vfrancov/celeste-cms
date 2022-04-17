import { Application } from 'express';
import { RequestInfoDS } from '../../core/definitions/request-info.ds';
import { ZoneController } from './controller/zone.controller';
import requestZoneAll from "./data/zone-request.json"

export class ZoneRouter {
    static zoneAll(server: Application): void {
        const zoneRequest: RequestInfoDS = requestZoneAll;
        server[zoneRequest.method](zoneRequest.url, ZoneController.happyPathZoneAll.bind(this));
    }
}