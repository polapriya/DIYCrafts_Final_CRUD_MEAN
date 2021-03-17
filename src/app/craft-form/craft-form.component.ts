import { Component, OnInit, Input } from '@angular/core';
import{ CraftService } from '../craft.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-craft-form',
  templateUrl: './craft-form.component.html',
  styleUrls: ['./craft-form.component.css']
})
export class CraftFormComponent implements OnInit {
  @Input() crafttype: string;
  @Input() craftname: string;
  @Input() material: string;
  @Input() requiredtime: string;
  @Input() notes: string;
  @Input() customerrating: string;
  public mode = 'add'; //default mode
  private id: string; //craft ID
  constructor(private _myService: CraftService, private router:Router, public route: ActivatedRoute) { }
    ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'Edit'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');}
       else {this.mode = 'Add';
           this.id = null; }
     });
  }
  
   Onsubmit() {
    console.log("You Submitted: " + this.crafttype + " | " + this.craftname + " | " + this.material + " | " + this.requiredtime + " | " + this.notes + " | " + this.customerrating);
    if(this.mode == 'Add')
    this._myService.addCrafts(this.crafttype, this.craftname , this.material , this.requiredtime , this.notes , this.customerrating);
    if(this.mode == 'Edit')
    this._myService.updateCrafts(this.id, this.crafttype, this.craftname , this.material, this.requiredtime , this.notes , this.customerrating);
        this.router.navigate(['/listCrafts']);
  }
 }
