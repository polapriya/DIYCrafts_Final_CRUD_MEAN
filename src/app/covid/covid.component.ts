import { Component, OnInit } from '@angular/core';
import{ CovidService } from '../covid.service';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  public covids;
  constructor(private _myService: CovidService) { }
 ngOnInit() {
   this.getCovids();
 }
 //method called OnInit
 getCovids() {
  this._myService.getCovids().subscribe(
     //read data and assign to public variable covid
     data => { this.covids = data},
     err => console.error(err),
     () => console.log('finished loading')
   );
 }
 onDelete(covidID: string) {
  this._myService.deleteCovids(covidID);
}
}

