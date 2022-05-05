import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardData } from "./dashboard.dto";

export interface IDashboardRespository {
    getDashoardResume(): Observable<HttpResponse<DashboardData>>
}
