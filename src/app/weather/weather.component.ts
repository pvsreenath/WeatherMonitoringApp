import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule} from '@angular/forms'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  details:any;
  ip:any;
  location:any;


  
  constructor(private dataService:DataService, private router:Router) { }

 
  async ngOnInit():Promise<any>{
    
  
    // for (const key in localStorage) {
    //   console.log(`${key}: ${localStorage.getItem(key)}`);
    // }
    for (let i = 0; i < localStorage.length; i++) {
      var ele:any=document.getElementById('mySelect')
      var option = document.createElement('option')
      const key:any = localStorage.key(i);
      option.text=`${localStorage.getItem(key)}`
      ele.add(option);
    }  
    if(localStorage.getItem('default')){
      this.location=localStorage.getItem('default')
      this.dataService.getWeatherDetails(this.location)
      .subscribe(data => {this.details = data,
       console.log(data)
      })
    }
    else{
      await fetch('https://api.ipify.org/?format=json').then(results => results.json()).then(data=>this.ip=data.ip);
      this.dataService.getCity(this.ip).subscribe(data => {
        console.log(data)
        this.location=data;
        this.dataService.getWeatherDetails(this.location.city)
        .subscribe(data => {this.details = data,
         console.log(data)
        })
      })
    }
    
   
  }
  onClick(){
    this.router.navigate(['/settings'])
  }
  onSelect(location:any){
    this.router.navigate(['/weather',location])
  }

  onSelect2(location2:any){
    this.router.navigate(['/weather',location2])
  }

}
