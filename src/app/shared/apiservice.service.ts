import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  

  posts(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
