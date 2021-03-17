import { Component, OnInit } from '@angular/core';
import { DecorService } from '../decor.service';
@Component({
  selector: 'app-craft-list',
  templateUrl: './craft-list.component.html',
  styleUrls: ['./craft-list.component.css']
})
export class CraftListComponent implements OnInit {

  public decors: Object;
  //initialize the call using StudentService 
  constructor(private _myService: DecorService) { }
  ngOnInit() {
    this.getdecor();
  }
  //method called OnInit
  getdecor() {
   this._myService.getDecor().subscribe(
      //read data and assign to public variable students
      data => { this.decors = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(decorID: string) {
    this._myService.deleteDecor(decorID);
  } 
}
