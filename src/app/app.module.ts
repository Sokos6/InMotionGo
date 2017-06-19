import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivtyListComponent } from './activty-list/activty-list.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from './services/activity.service';

@NgModule({
  declarations: [
    AppComponent,
    ActivtyListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
