import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uibreport',
  templateUrl: './uibreport.component.html',
  styleUrls: ['./uibreport.component.scss']
})
export class UibreportComponent implements OnInit {
  isDesc: boolean = false;
  column: string = 'CategoryName';
ngOnInit(){

}
displayedColumns = ['position', 'name', 'weight', 'symbol'];
records= [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
 
 
];

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




