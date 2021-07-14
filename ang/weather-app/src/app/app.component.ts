import { Component } from '@angular/core';

export class Weather {
  city: String

  date:string
  temperature:number
  minimum:number
  maximum:number
  pressure:number
  humidity:number
  
  date1:string
  temperature1: number
  minimum1:number
  maximum1:number
  pressure1:number
  humidity1:number

  date2:string
  temperature2: number
  minimum2:number
  maximum2:number
  pressure2:number
  humidity2:number

  date3:string
  temperature3: number
  minimum3:number
  maximum3:number
  pressure3:number
  humidity3:number


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather | Imaginnovate';
}
