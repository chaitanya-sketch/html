import { Component } from '@angular/core'
import { Weather } from '../../app.component'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  weather: Weather = {
    city: "",

    date:"DD/MM/YYYY",
    minimum:0,
    maximum:0,
    pressure:0,
    humidity:0,
    temperature:0,

    date1:"DD/MM/YYYY",
    minimum1:0,
    maximum1:0,
    pressure1:0,
    humidity1:0,
    temperature1:0,

    date2:"DD/MM/YYYY",
    temperature2:0,
    minimum2:0,
    maximum2:0,
    pressure2:0,
    humidity2:0,
    
    date3:"DD/MM/YYYY",
    temperature3:0,
    minimum3:0,
    maximum3:0,
    pressure3:0,
    humidity3:0
  }
  
  update(weather: Weather) {
    this.weather = weather
  }
}
