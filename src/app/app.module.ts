import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeNewsComponent } from './pages/home/home-news/home-news.component';
import { HomeCarouselComponent } from './pages/home/home-carousel/home-carousel.component';
import { HomeEventsComponent } from './pages/home/home-events/home-events.component';
import { HomeInstagramComponent } from './pages/home/home-instagram/home-instagram.component';
import { HomeGooglemapsComponent } from './pages/home/home-googlemaps/home-googlemaps.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    DemoComponent,
    HomeNewsComponent,
    HomeCarouselComponent,
    HomeEventsComponent,
    HomeInstagramComponent,
    HomeGooglemapsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
