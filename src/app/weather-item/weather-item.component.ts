import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-item',
  template: `
      <article> 
        <div class = "col-1"> 
          <h3> Cityname <h3>
          <p class = "info"> Clouds</p>
        </div>
        <div class = "col-2">
          <span class = "temperature"> 35 </span>
        </div>
        
      </article>`,

})
export class WeatherItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}