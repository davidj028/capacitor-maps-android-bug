import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'capacitor-app';

  @ViewChild('map') mapRef: ElementRef<HTMLElement> | undefined;
  map: GoogleMap | undefined;

  ngAfterViewInit() {
		setTimeout(() => {
      this.createMap();
    }, 1000);
	}

  async createMap() {
    if (this.mapRef == null) {
      console.info("mapRef null")
      return;
    }
    console.info("mapRef not null")

    this.map = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}
