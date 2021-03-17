import { Component, NgModule, OnInit } from '@angular/core';
import { GiftsdataService } from '../giftsdata.service';
@Component({
  selector: 'app-list-giftsdata',
  templateUrl: './list-giftsdata.component.html',
  styleUrls: ['./list-giftsdata.component.css']
})
export class ListGiftsdataComponent implements OnInit {

      //declare variable to hold response and make it public to be accessible from components.html
      public giftsdata;
      //initialize the call using StudentService 
      constructor(private _myService: GiftsdataService) { }
      ngOnInit() {
        this.getGiftsdata();
      }
      //method called OnInit
      getGiftsdata() {
        console.log('LOOK here', this.giftsdata)
       this._myService.getGiftsdata().subscribe(
          //read data and assign to public variable students
          data => { this.giftsdata = data},
          err => console.error(err),
          () => console.log('finished loading')
        );
      }
      onDelete(giftsdataId: string) {
        this._myService.deleteGiftsdata(giftsdataId);
      }
}
