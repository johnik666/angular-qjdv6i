import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from './weather-item/weather-item.component';

@Component({
  selector: 'app-weather-list',
  template: `
             <section class="weather-list">
              <weather-item></weather-item>
             </section>
            `,
  directives: [WeatherItemComponent],
})
export class WeatherListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}