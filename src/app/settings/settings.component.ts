import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router:Router,private dataService:DataService) { }
   location:any;

  ngOnInit(): void {
    
 for (let i = 0; i < localStorage.length; i++) {
  var ele:any=document.getElementById('mySelect')
  var option = document.createElement('option')
  const key:any = localStorage.key(i);
  option.text=`${localStorage.getItem(key)}`
  ele.add(option);
  }
  for (let i = 0; i < localStorage.length; i++) {
    var ele:any=document.getElementById('mySelect2')
    var option = document.createElement('option')
    const key:any = localStorage.key(i);
    option.text=`${localStorage.getItem(key)}`
    ele.add(option);
  }


  }
  onSelect(location:any){
    this.router.navigate(['/weather',location])
  }
  onSelect2(item:any){
    this.dataService.setUnits(item)
  }
  
  remove(item:any){
    var ele:any=document.getElementById('mySelect') 
    ele.remove(ele.selectedIndex)
    for (let i = 0; i < localStorage.length; i++) {
      const key:any = localStorage.key(i);
      if(item==`${localStorage.getItem(key)}`){
        localStorage.removeItem(key)
      }
      
    }  
    
  }
  
  
  i=localStorage.length
  addItem(item:any){
    localStorage.setItem(`city${this.i}`,item)
    var ele:any=document.getElementById('mySelect')
    var option = document.createElement('option')
    option.text=item
    ele.add(option) 
    this.i++;
  }

  default(item:any){
    localStorage.setItem('default',item)
  }

}
