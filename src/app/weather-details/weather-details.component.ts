import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  location:any;
  details:any;
  forcast:any;
  units:any;
  forcasting:Array<any>=[];
  constructor(private dataService:DataService, private router:ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    await this.router.paramMap.subscribe((params: ParamMap)=>{
      this.location= params.get('location');
      console.log(this.location)
      this.dataService.getWeatherDetails(this.location).subscribe(data=>{
        this.details=data
        console.log(this.details)
      })
     this.units=this.dataService.getUnits();
     console.log(this.units)
     this.dataService.getForcatingDetails(this.location,this.units).subscribe(data=>{

        this.forcast = data;
        console.log(this.forcast)
        for(let i=0;i<this.forcast.list.length;i++){
          if(i%8==0){
            console.log(this.forcast.list[i])
            this.forcasting.push(this.forcast.list[i])
          }
        }
        console.log(this.forcasting)
      })
      
    })
  }

}
