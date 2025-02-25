import { Observable } from "rxjs";
import { DetailClientResponse, ListClientsResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest } from "./client.models";

export interface IClientsService {
    save(request: SaveClientRequest): Observable<SaveClientResponse>;

    update(id: number, request: UpdateClientRequest): Observable<UpdateClientRequest>;

    delete(id: number): Observable<void>;

    list(): Observable<ListClientsResponse>;

    listById(id: number): Observable<DetailClientResponse>;

}