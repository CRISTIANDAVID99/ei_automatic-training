import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class EiService {
  constructor(private http: HttpService) {}

  findAllDeploymentTargets(): Observable<AxiosResponse<any>> {
    const headersRequest: AxiosRequestConfig = {
      headers: { 'x-api-key': ` ${process.env.EI_API_KEY}` },
    };
    console.log(process.env.EI_ENDPOINT + '/api/deployment/targets');
    const response = this.http.get(
      process.env.EI_ENDPOINT + '/api/deployment/targets',
      headersRequest,
    );
    return response.pipe(map((res) => res.data));
  }
}
