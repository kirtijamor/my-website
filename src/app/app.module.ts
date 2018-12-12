import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TravelBoxComponent } from './travel-box/travel-box.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrazilComponent } from './brazil/brazil.component';
import { AustraliaComponent } from './australia/australia.component';
import { NetherlandComponent } from './netherland/netherland.component';
import { TurkeyComponent } from './turkey/turkey.component';
import { PackageIndiaComponent } from './package-india/package-india.component';
import { PackageSpainComponent } from './package-spain/package-spain.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageThailandComponent } from './package-thailand/package-thailand.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    AboutUsComponent,
    TravelBoxComponent,
    HotelsComponent,
    FlightsComponent,
    GalleryComponent,
    BrazilComponent,
    AustraliaComponent,
    NetherlandComponent,
    TurkeyComponent,
    PackageIndiaComponent,
    PackageSpainComponent,
    PackagesComponent,
    PackageThailandComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
