import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'',redirectTo:'weather', pathMatch:'full'},
  {path:"weather",component:WeatherComponent},
  {path:'settings',component:SettingsComponent},
  {path:'weather/:location',component:WeatherDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
