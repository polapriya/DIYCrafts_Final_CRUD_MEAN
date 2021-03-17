import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class CraftService { 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getCrafts() {
        return this.http.get('http://localhost:8000/crafts');
    }
    // Uses http.post() to post data 
    addCrafts(crafttype: string, craftname: string, material: string, requiredtime: string, notes: string, customerrating: string) {
        this.http.post('http://localhost:8000/crafts', { crafttype, craftname, material, requiredtime, notes, customerrating})
        .subscribe((responseData) => {
            console.log(responseData);
          }); 
          location.reload();
       }
       deleteCraft(craftID: string) {
        this.http.delete("http://localhost:8000/crafts/" + craftID)
          .subscribe(() => {
              console.log('Deleted: ' + craftID);
          });
          location.reload();
      }  
      updateCrafts(craftID: string, crafttype: string, craftname: string, material: string, requiredtime: string, notes: string, customerrating: string) {
        //request path http://localhost:8000/crafts/5xbd456xx 
                   this.http.put("http://localhost:8000/crafts/" 
                 + craftID, { crafttype, craftname, material, requiredtime, notes, customerrating })
              .subscribe(() => {
                  console.log('Updated: ' + craftID);
              });
              location.reload();
    }
}
