import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DashboardDTO } from "@domain/dashboard/dashboard.dto";
import { IDashboardRespository } from "@domain/dashboard/dashboard.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class DashboardService implements IDashboardRespository {

    constructor(private http: HttpClient) { }

    getDashoardResume(): Observable<HttpResponse<DashboardDTO>> {
        return this.http.get<DashboardDTO>(`${environment.baseUrl}/api/Dashboard/getResume`, { observe: 'response' });
    }
}