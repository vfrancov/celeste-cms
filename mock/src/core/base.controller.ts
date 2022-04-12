import { ResponseInfoDS } from './definitions/response-info.ds';
import express = require('express');

export abstract class BaseController {
    static sendResponse(res: express.Response, data: ResponseInfoDS): void {
        res.statusMessage = data.statusText;
        res.status(data.status).set(data.headers).jsonp(data.body || data.error);
    }
}