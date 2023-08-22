import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [CrudService]
})
export class ViewComponent {
  users:any=[];

  constructor(private http: HttpClient,
    private crudService: CrudService ){
}

ngOnInit(){
  this.getAllUser();
}

  // getAllUser(){
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //   .subscribe((user) => {
  //     this.users = user;;
  //   });
  // }

  getAllUser(){
   this.users = this.crudService.getAllUser();
   console.log(this.users)
  }

}
