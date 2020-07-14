import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapviewComponent } from './components/mapview/mapview.component';
import { UibreportComponent } from './components/uibreport/uibreport.component';
import { TimelineviewComponent } from './components/timelineview/timelineview.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AgmCoreModule } from '@agm/core';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MapviewComponent,
    UibreportComponent,
    TimelineviewComponent,
    NavigationComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyB8dsGjzSsllinnfF7kqfBZ2YZO00wRKSc'
    })
  
    //FontAwesomeModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
