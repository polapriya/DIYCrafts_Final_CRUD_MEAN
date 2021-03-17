import { Component, Input, OnInit } from '@angular/core';
import { idText } from 'typescript';
import { FormGroup, FormControl } from '@angular/forms';
import { DecorService } from '../decor.service';  
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  public mode = 'FLOAT'; //default mode
  private id: string; //decor ID
  
  @Input() Fiesta : string;
  @Input() Publisher : string;
  @Input() CostDetails : string;
  @Input() EquipmentRequired : string;
  @Input() ImageURL : string;
  @Input() YoutubeLink : string;
  constructor(private _myService: DecorService,private router:Router,public route: ActivatedRoute){}
  
  onSubmit(){
    console.log("You submitted:Fiesta: " + this.Fiesta + " || Publisher: "+ this.Publisher + " || CostDetails:" + this.CostDetails   +" ||Equipment Required: "+this.EquipmentRequired +"     || Image URL: " + this.ImageURL    +" || YouTube Link:" + this.YoutubeLink);
    this.router.navigate(['/home']);
    this.router.navigate(['/API']);
    // this._myService.addDecors(this.Fiesta,this.Publisher, this.CostDetails, this.EquipmentRequired,this.ImageURL, this.YoutubeLink);
    // this.router.navigate(['/craftlist']);
    if(this.mode == 'FLOAT')
      this._myService.addDecors(this.Fiesta,this.Publisher, this.CostDetails, this.EquipmentRequired,this.ImageURL, this.YoutubeLink);
      this.router.navigate(['/decorlist']);
      if(this.mode == 'EDIT')
      this._myService.updateDecors(this.id,this.Fiesta,this.Publisher, this.CostDetails, this.EquipmentRequired,this.ImageURL, this.YoutubeLink);
      this.router.navigate(['/decorlist']);
      

  }
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'EDIT'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');}
       else {this.mode = 'FLOAT';
           this.id = null; }
     });
  }
}