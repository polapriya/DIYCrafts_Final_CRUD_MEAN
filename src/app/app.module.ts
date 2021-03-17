import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CraftService } from './craft.service';  
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule } from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CraftFormComponent } from './craft-form/craft-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ListCraftsComponent } from './list-crafts/list-crafts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {CraftListComponent} from './craft-list/craft-list.component';
import {​​​​ ListGiftsdataComponent }​​​​ from './list-giftsdata/list-giftsdata.component';
import {​​ NewGiftsdataFormComponent }​​ from './new-giftsdata-form/new-giftsdata-form.component';
import { GiftsdataService } from './giftsdata.service';
import { DecorService} from './decor.service';
import {HomeMenuComponent} from './home/home-menu.component';
import {​​NgxYoutubePlayerModule}​​ from 'ngx-youtube-player';
import { CovidComponent } from './covid/covid.component';
import { CovidformComponent } from './covidform/covidform.component';
import { CovidService } from './covid.service';
import { ApiComponent } from './api/api.component';  

const appRoutes: Routes = [
  {path: 'API',       //when API shows
  component: ApiComponent
}​​, 
  {path: 'Home',       //when home shows
  component: HomeMenuComponent
}​​,  
{
  path: '',                     //default component to display
   component: HomeMenuComponent
 },       {
   path: 'addCraft',         //when crafts added 
   component: CraftFormComponent
 },     {
  path: 'editCraft/:_id',         //when crafts edited 
  component: CraftFormComponent
},     {
   path: 'listCrafts',       //when crafts listed
   component: ListCraftsComponent
 },     
 {
  path: 'decorlist',                 //List of crafts
  component: CraftListComponent
},
{
 path: 'editdecor/:_id',         //when craft details edited 
 component: ProfileEditorComponent
},
{
 path: 'decor',         //when craft details edited 
 component: ProfileEditorComponent
},
{​​
  path: 'addGiftsdata',         //when gifts added 
  component: NewGiftsdataFormComponent
}​​,  
{​​
 path: 'editGiftsdata/:_id',         //when gifts edited 
 component: NewGiftsdataFormComponent
}​​,
{​​
  path: 'listGiftsdata',       //when gifts listed
  component: ListGiftsdataComponent
}​​,  
{
  path: 'addCovid',         //when crafts added 
  component: CovidformComponent
},     {
 path: 'editCovid/:_id',         //when crafts edited 
 component: CovidformComponent
},     {
  path: 'listCovids',       //when crafts listed
  component: CovidComponent}, 

{​​
  path: '**',                 //when path cannot be found
  component: NotFoundComponent
}​​
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CraftFormComponent,
    ListCraftsComponent,
    NotFoundComponent,
    CraftListComponent,
    ProfileEditorComponent, 
    ListGiftsdataComponent,
    NewGiftsdataFormComponent, 
    HomeMenuComponent,
    CovidComponent,
    CovidformComponent,
    ApiComponent
        ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    ​​NgxYoutubePlayerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CraftService, DecorService, GiftsdataService, CovidService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
