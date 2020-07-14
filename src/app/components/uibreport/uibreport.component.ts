import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-uibreport',
  templateUrl: './uibreport.component.html',
  styleUrls: ['./uibreport.component.scss']
})
export class UibreportComponent implements OnInit {
  isDesc: boolean = false;
  column: string = 'CategoryName';
  agencyName: any;
  distName: any;
  reportData:any;
ngOnInit(){
this.reportData=this.records
}
displayedColumns = ['District', 'Parcels', 'Buildings', 'Portions','Agents'];
Districts=["Krishna","Godavari","Prakassam","Medhak","Nellore"]
Agencies=["RDUS","Anant technolgies","Global Health"]

records= [
  {agency:'RDUS',district:"Krishna" ,date:"2019-08-10T17:58:47Z",Parcels:5,Buildings:0,Portions:3,Agents:1},
  {agency:'RDUS',district:"Godavari" ,date:"2019-08-10T17:58:47Z",Parcels:1,Buildings:3,Portions:6,Agents:4},
  {agency:'Anant technolgies',district:"Prakassam" ,date:"2019-08-10T17:58:47Z",Parcels:0,Buildings:1,Portions:3,Agents:8},
  {agency:'Global Health',district:"Medhak" ,date:"2019-08-10T17:58:47Z",Parcels:2,Buildings:7,Portions:8,Agents:20},
  {agency:'RDUS',district:"Nellore" ,date:"2019-08-10T17:58:47Z",Parcels:0,Buildings:5,Portions:13,Agents:2}

];
filterData(){
  console.log(this.agencyName,this.distName)
 
  console.log( this.reportData,this.records)
  if(this.agencyName&&this.distName){
    this.reportData=this.records.filter(data=>(data.agency===this.agencyName&&data.district===this.distName))
  
  }
  else {
    if(this.agencyName) { console.log("tttt"); this.reportData=this.records.filter(data=>data.agency==this.agencyName)}
    else  this.reportData=this.records.filter(data=>data.district==this.distName)
  }
}
sortByCol(property) {
  this.isDesc = !this.isDesc; //change the direction    
  this.column = property;
  let direction = this.isDesc ? 1 : -1;

  this.records.sort(function (a, b) {
    if (a[property] < b[property]) {
      return -1 * direction;
    }
    else if (a[property] > b[property]) {
      return 1 * direction;
    }
    else {
      return 0;
    }
  });
};
}




