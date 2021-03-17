import { Component, OnInit , Input } from '@angular/core';
import { GiftsdataService } from '../giftsdata.service';  
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-new-giftsdata-form',
  templateUrl: './new-giftsdata-form.component.html',
  styleUrls: ['./new-giftsdata-form.component.css']
})
export class NewGiftsdataFormComponent implements OnInit {
  @Input() creators_name: string;
  @Input() event_category_name: string;
  @Input() recipient: string;
  @Input() age: number;
  @Input() gift_Category: string;
  @Input() gift_idea: string;
  @Input() myDatepickerr: Date;
  public mode = 'add'; //default mode
  private id: string; //gift ID  
  constructor(private _myService: GiftsdataService, private router:Router, public route: ActivatedRoute) { }
    onSubmit(){
    console.log("You submitted: " + this.creators_name + " " + this.event_category_name+ " "+this.recipient+ " "+ 
    +this.age  + " "+this.gift_Category + " "+this.gift_idea + " "+this.myDatepickerr + " ");
    if(this.mode == 'add')
      this._myService.addGiftsdata({ creators_name: this.creators_name, event_category_name: this.event_category_name, recipient: this.recipient, age: this.age, gift_Category: this.gift_Category, gift_idea: this.gift_idea, myDatepickerr: this.myDatepickerr });
    if(this.mode == 'edit')
      this._myService.updateGiftsdata(this.id, this.creators_name, this.event_category_name, this.recipient, this.age, this.gift_Category,  this.gift_idea, this.myDatepickerr );
    this.router.navigate(['/listGiftsdata']);
    }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');}
      else {this.mode = 'add';
          this.id = null; }
    });
 
  }

}
