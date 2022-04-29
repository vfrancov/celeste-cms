import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComboDTO } from "@domain/shared/combo.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getModules(): Observable<HttpResponse<ComboDTO>> {
    return this.http.get<ComboDTO>(`${environment.baseUrl}/api/ComboBoxGeneral/Menu`, { observe: 'response' });
  }
}
