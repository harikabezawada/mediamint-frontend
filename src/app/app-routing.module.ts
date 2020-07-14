import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapviewComponent } from './components/mapview/mapview.component';
import { TimelineviewComponent } from './components/timelineview/timelineview.component';
import { UibreportComponent } from './components/uibreport/uibreport.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapviewComponent,
    data: {
      title: "Map View"
    }
  },
  {
    path: 'timeline',
    component: TimelineviewComponent,
    data: {
      title: "timeline view"
    }
  },
  {
    path: 'report',
    component: UibreportComponent,
    data: {
      title: "Uib report"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
