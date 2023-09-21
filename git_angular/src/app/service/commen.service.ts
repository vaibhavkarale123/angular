import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommenService {
  saveData(p:any) {
    return this.http.post("",p);
  }

  constructor(public http:HttpClient) { }
}
