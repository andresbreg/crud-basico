import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../model/Tarea';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  Url='http://localhost:8080/api/tareas';

  getData():Observable<any> {
    return this.http.get(this.Url);
  }

  getElement(id: String):Observable<any> {
    return this.http.get(this.Url + '/' + id);
  }

  saveElement(tarea: Tarea):Observable<any> {
    return this.http.post(this.Url, tarea);
  }

  editElement(id:String, tarea:Tarea):Observable<any> {
    return this.http.put(this.Url + '/' + id, tarea);
  }

  deleteElement(id:String):Observable<any> {
    return this.http.delete(this.Url + '/' + id);
  }
}
