import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBodyMetrics } from '../models/IBodyMetrics.model';

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
}
