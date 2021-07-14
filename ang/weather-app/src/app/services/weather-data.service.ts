import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/forecast'
let apiKey: String = '1635890035cbba097fd5c26c8ea672a1' // insert your API key here

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
