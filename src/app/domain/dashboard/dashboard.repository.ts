import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardDTO } from "./dashboard.dto";

export interface IDashboardRespository {
    getDashoardResume(): Observable<HttpResponse<DashboardDTO>>
}