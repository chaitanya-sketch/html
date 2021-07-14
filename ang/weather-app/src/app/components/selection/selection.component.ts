import { Component, Output, EventEmitter } from '@angular/core'
import { WeatherDataService } from '../../services/weather-data.service'
import { Weather } from '../../app.component'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()
  weather: Weather = new Weather()
  city: String = ""

  constructor(private weatherData: WeatherDataService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      console.log(data);
      this.weather.city = data['city'].name
      
      this.weather.date=data['list']['0'].dt_txt
      this.weather.temperature = Math.round((data['list']['0']['main'].temp - 273.15))
      this.weather.minimum=Math.round((data['list']['0']['main'].temp_min- 273.15))
      this.weather.maximum=Math.round((data['list']['0']['main'].temp_max- 273.15))
      this.weather.pressure=data['list']['0']['main'].pressure
      this.weather.humidity=data['list']['0']['main'].humidity

      this.weather.date1=data['list']['8'].dt_txt
      this.weather.temperature1 = Math.round((data['list']['8']['main'].temp - 273.15))
      this.weather.minimum1=Math.round((data['list']['8']['main'].temp_min - 273.15))
      this.weather.maximum1=Math.round((data['list']['8']['main'].temp_max - 273.15))
      this.weather.pressure1=data['list']['8']['main'].pressure
      this.weather.humidity1=data['list']['8']['main'].humidity

      this.weather.date2=data['list']['16'].dt_txt
      this.weather.temperature2 = Math.round((data['list']['16']['main'].temp - 273.15))
      this.weather.minimum2=Math.round((data['list']['16']['main'].temp_min - 273.15))
      this.weather.maximum2=Math.round((data['list']['16']['main'].temp_max - 273.15))
      this.weather.pressure2=data['list']['16']['main'].pressure
      this.weather.humidity2=data['list']['16']['main'].humidity

      this.weather.date3=data['list']['24'].dt_txt
      this.weather.temperature3 = Math.round((data['list']['24']['main'].temp - 273.15))
      this.weather.minimum3=Math.round((data['list']['24']['main'].temp_min- 273.15))
      this.weather.maximum3=Math.round((data['list']['24']['main'].temp_max- 273.15))
      this.weather.pressure3=data['list']['24']['main'].pressure
      this.weather.humidity3=data['list']['24']['main'].humidity
      this.onSelection.emit(this.weather)
    })
  }
}
