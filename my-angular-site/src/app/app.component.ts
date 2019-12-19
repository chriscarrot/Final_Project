import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  template: `


    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>


  `,
  styles: []
})
export class AppComponent {

  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

}
