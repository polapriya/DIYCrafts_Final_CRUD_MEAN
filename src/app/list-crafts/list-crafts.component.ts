import { Component, OnInit } from '@angular/core';
import {CraftService} from '../craft.service';
@Component({
  selector: 'app-list-crafts',
  templateUrl: './list-crafts.component.html',
  styleUrls: ['./list-crafts.component.css']
})
export class ListCraftsComponent implements OnInit {
  public crafts;
    constructor(private _myService: CraftService) { }
   ngOnInit() {
     this.getCrafts();
   }
   //method called OnInit
   getCrafts() {
    this._myService.getCrafts().subscribe(
       //read data and assign to public variable crafts
       data => { this.crafts = data},
       err => console.error(err),
       () => console.log('finished loading')
     );
   }
   onDelete(craftID: string) {
    this._myService.deleteCraft(craftID);
  }
}
