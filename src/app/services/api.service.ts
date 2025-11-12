import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9000'; // FastAPI backend

  constructor(private http: HttpClient) {}

  generateDocs(gitUrl: string): Observable<any> {
    const formData = new FormData();
    formData.append('git_url', gitUrl);
    return this.http.post(`${this.baseUrl}/generate-docs`, formData);
  }
}
