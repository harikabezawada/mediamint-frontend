import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ThemeService } from 'ng2-charts';

import { Chart } from 'chart.js';  

@Component({
  selector: 'app-timelineview',
  templateUrl: './timelineview.component.html',
  styleUrls: ['./timelineview.component.scss']
})
export class TimelineviewComponent implements OnInit {
  realtimeData=[
   
]
lineChartData: ChartDataSets[] = [
  { data:[], label: 'Crude oil prices' },
];

lineChartLabels: Label[] = [];

lineChartOptions = {
  responsive: true,
};

lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,0,0.28)',
  },
];

lineChartLegend = true;
lineChartPlugins = [];
lineChartType = 'line';
  Linechart: any;
  agencyName: any;
  daylimit: any;
  pckdType: any;
  dayLimit: any;
  graphData:any
  constructor() {
    this.realtimeData=[ {
      packId:"ABK-0450231",
      createdBy:"Satya Purapakka",
      createdDate:"2020-05-10T17:58:47Z",
      agencyName:"RDUS",
      type:"Parcels",
      count:50
    },
    {
      packId:"ABK-0450232",
      createdBy:"Harika Bezawada",
      createdDate:"2018-10-08T16:58:47Z",
      agencyName:"RDUS",
      type:"Buildings",
      count:50
    },
    {
      packId:"ABK-0450233",
      createdBy:"Pushpa Dasamsetty",
      createdDate:"2019-08-10T17:58:47Z",
      type:"Buildings",
      count:50
    },
    {
      packId:"ABK-0450234",
      createdBy:"Pavani Vinukonda",
      createdDate:"2020-07-10T16:58:47Z",
      agencyName:"RDUS",
      type:"Parcels",
      count:50
    },]
    this.graphData=[ {
     
      createdDate:"2020-05-10T17:58:47Z",
      agencyName:"RDUS",
      type:"Parcels",
      count:50
    },
    {
     
      createdDate:"2018-10-08T16:58:47Z",
      agencyName:"RDUS",
      type:"Buildings",
      count:50
    },
    {
     
      createdDate:"2019-08-10T17:58:47Z",
      agencyName:"RDUS",
      type:"Buildings",
      count:50
    },
    {
    
      createdDate:"2020-07-10T16:58:47Z",
      agencyName:"RDUS",
      type:"Portions",
      count:50
    },]
   
   
   }
  
  filterData(){
    console.log(this.agencyName,this.dayLimit,this.pckdType)
  this.graphData=  this.graphData.filter(
      data => 
      {
        if(this.agencyName&&this.pckdType)
        data.agencyName===this.agencyName&&data.type===this.pckdType
        if (this.agencyName)
        {data.agencyName==this.agencyName}
        else data.type===this.pckdType
      })
      console.log(this.graphData)
  } 
labels=["2020-10-12","2020-06-05"]
  ngOnInit() {
   
    this.Linechart = new Chart('canvas', {  
      type: 'line',  
      data: {  
        labels: this.labels,  
        datasets: [  
          {  
            data: [10,0],  
            // borderColor: '#3cb371',  
            // backgroundColor: "#0000FF",  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: false  
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    });  
  
this.Linechart.data.datasets[0].data=[100,200,150]
this.Linechart.update()
  }

}
