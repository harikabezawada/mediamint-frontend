import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelineview',
  templateUrl: './timelineview.component.html',
  styleUrls: ['./timelineview.component.scss']
})
export class TimelineviewComponent implements OnInit {
  realtimeData=[
    {
    packId:"ABK-0450231",
    createdBy:"Satya Purapakka",
    createdDate:"2020-05-10T17:58:47Z",
    agencyName:"RDUS"
  },
  {
    packId:"ABK-0450232",
    createdBy:"Harika Bezawada",
    createdDate:"2018-10-08T16:58:47Z",
    agencyName:"RDUS"
  },
  {
    packId:"ABK-0450233",
    createdBy:"Pushpa Dasamsetty",
    createdDate:"2019-08-10T17:58:47Z",
    agencyName:"RDUS"
  },
  {
    packId:"ABK-0450234",
    createdBy:"Pavani Vinukonda",
    createdDate:"2020-07-10T16:58:47Z",
    agencyName:"RDUS"
  },
]
  constructor() {
    
   }

  ngOnInit() {
    
  }

}
