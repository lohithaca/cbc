import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private http: HttpClient){
}

createUser(userForm: any){
    const userDetail = userForm;
    console.log(userDetail.value);
    this.http.post('https://jsonplaceholder.typicode.com/users', userDetail)
    .subscribe((result) => {
      console.log(result);
    });
  }

}
