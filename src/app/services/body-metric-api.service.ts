import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IBodyMetrics } from '../models/IBodyMetrics.model';
import { IUser } from '../models/IUser.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BodyMetricApiService {
  constructor(private httpClient: HttpClient) {}

  private apiEndpoint: string = 'http://localhost:5000/';

  addBodyMetric(metrics: IBodyMetrics) {
    const uri = this.apiEndpoint + 'body-metrics';
    return this.httpClient.post<any>(uri, metrics, httpOptions);
  }

  createAppUser(user: IUser) {
    const uri = this.apiEndpoint + 'auth/register';
    return this.httpClient.post(uri, user, httpOptions);
  }

  verifyLogin(loginData: any): Observable<any> {
    const uri = this.apiEndpoint + 'auth/login';
    return this.httpClient.post(uri, loginData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response',
    });
  }
}
