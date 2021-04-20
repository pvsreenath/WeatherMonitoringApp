import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  city:any;
  units:any='metric';
  constructor(private http:HttpClient) { }
  getCity(ip:any){
    var _url = "https://api.ipfind.com/?ip="+ip+"&auth=b03ebe4f-5dd3-49c5-8dfb-87e714151bf8"
    return  this.http.get(_url);
  }

  // http://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=1dc257a3c1ded5373f16aef5d1c8a563
  getWeatherDetails(city:any):Observable<object>{
    var _url = "http://api.weatherstack.com/current?access_key=b30278124a8bd6a71bd0ef25f74f257d&query="+city
    return  this.http.get(_url);
  }
  getForcatingDetails(city:any,unit:any){
    var _url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=904f4892e202e4b9e33580d6b6f2cd52&units=${unit}`
    return  this.http.get(_url);
  }
  setUnits(item:any){
    this.units=item
  }
  getUnits(){
    return this.units
  }
  
}
 
