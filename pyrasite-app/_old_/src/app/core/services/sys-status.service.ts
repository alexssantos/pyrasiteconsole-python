import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasicConfig } from '../models/basic-config.model';


@Injectable({
  providedIn: 'root'
})
export class SysStatusService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getInitialSysConfig() {
    return this.httpClient.get<BasicConfig[]>(`${this.baseUrl}/api/basic`);

  }
}
