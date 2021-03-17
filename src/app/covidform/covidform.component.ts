import { Component, OnInit, Input } from '@angular/core';
import{ CovidService } from '../covid.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-covidform',
  templateUrl: './covidform.component.html',
  styleUrls: ['./covidform.component.css']
})
export class CovidformComponent implements OnInit {

  @Input() fabricdetails: string;
  @Input() sanitizertype: string;
  @Input() alcoholcontent: string;
  @Input() handsoaptype: string;

  public mode = 'add'; //default mode
  private id: string; //craft ID
  constructor(private _myService: CovidService, private router:Router, public route: ActivatedRoute) { }
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
    console.log("You Submitted: " + this.fabricdetails + " | " + this.sanitizertype + " | " + this.alcoholcontent + " | " + this.handsoaptype);
    if(this.mode == 'Add')
    this._myService.addCovids(this.fabricdetails, this.sanitizertype , this.alcoholcontent , this.handsoaptype);
    if(this.mode == 'Edit')
    this._myService.updateCovids(this.id, this.fabricdetails, this.sanitizertype , this.alcoholcontent, this.handsoaptype);
        this.router.navigate(['/listCovids']);
  }
 }