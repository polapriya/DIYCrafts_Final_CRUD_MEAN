import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DecorService {
    constructor(private http:HttpClient) {}
    // Uses http.get() to load data 
    getDecor() {
        return this.http.get('http://localhost:8000/decor');
    }
// Uses http.post() to post data 
addDecors(Fiesta: string,Publisher: string, CostDetails: string, EquipmentRequired: string, ImageURL: string, YoutubeLink: string) {
    this.http.post('http://localhost:8000/decor',{Fiesta, Publisher, CostDetails, EquipmentRequired, ImageURL, YoutubeLink })
  .subscribe((responseData) => {
     console.log(responseData);
   }); 
}
deleteDecor(decorId: string) {
    this.http.delete("http://localhost:8000/decor/" + decorId)
      .subscribe(() => {
          console.log('Deleted: ' + decorId);
      });location.reload();
  }
  updateDecors(decorId: string,Fiesta: string,Publisher: string, CostDetails: string, EquipmentRequired: string, ImageURL: string, YoutubeLink: string) {
    //request path http://localhost:8000/students/5xbd456xx 
    //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/decor/" 
             + decorId,{ Fiesta, Publisher, CostDetails, EquipmentRequired, ImageURL, YoutubeLink  })
          .subscribe(() => {
              console.log('Updated: ' + decorId);
          });
          location.reload();
    }
}
