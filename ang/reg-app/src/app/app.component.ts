import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reg-app';
  username:string="";
  password:string="";
  confirmpassword:string="";
  gender:string="";
  country:string="";
  msg:string="";

  btnClick(){
    this.msg="Registration success";
  }
}
