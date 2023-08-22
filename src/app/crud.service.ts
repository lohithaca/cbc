import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  users:any=[];

  constructor(private http: HttpClient) { }

  getAllUser(){
    console.log("Service Class")
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((user) => {
      this.users = user;
    });
    return this.users;
  }
}
