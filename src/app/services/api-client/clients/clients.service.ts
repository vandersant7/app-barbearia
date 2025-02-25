import { Injectable } from '@angular/core';
import { IClientsService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, ListClientsResponse, DetailClientResponse, UpdateClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientsService {

  private readonly basePath = environment.apiUrl;
  
  constructor(private http: HttpClient) { }
  
  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}clients`, request);
  }
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientRequest> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients/${id}`, request);
    
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients/{id}`);
    
  }

  list(): Observable<ListClientsResponse> {
    return this.http.get<ListClientsResponse>(`${this.basePath}clients`);
    
  }

  listById(id: number): Observable<DetailClientResponse> {
    return this.http.get<DetailClientResponse>(`${this.basePath}clients/${id}`);
    
  }
}
