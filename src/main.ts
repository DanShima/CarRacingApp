// here we will bootstrap our app, loading the first component
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './race.service';

@NgModule({
    imports: [ // load required dependencies
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    declarations: [ // list of all components within the module
      AppComponent,
      RacesComponent
    ],
    bootstrap: [ AppComponent ], // indicate our root component
    providers: [ RaceService ]
  })
  class AppModule {}
// render app using AppModule
platformBrowserDynamic().bootstrapModule(AppModule);
