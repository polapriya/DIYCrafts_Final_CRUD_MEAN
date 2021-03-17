import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
@Injectable()
export class CovidService { 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getCovids() {
        return this.http.get('http://localhost:8000/covids');
    }
    // Uses http.post() to post data 
    addCovids(fabricdetails: string, sanitizertype: string, alcoholcontent: string, handsoaptype: string) {
        this.http.post('http://localhost:8000/covids', { fabricdetails, sanitizertype, alcoholcontent, handsoaptype})
        .subscribe((responseData) => {
            console.log(responseData);
          }); 
          location.reload();
       }
       deleteCovids(covidID: string) {
        this.http.delete("http://localhost:8000/covids/" + covidID)
          .subscribe(() => {
              console.log('Deleted: ' + covidID);
          });
          location.reload();
      }  
      updateCovids(covidID: string, fabricdetails: string, sanitizertype: string, alcoholcontent: string, handsoaptype: string) {
        //request path http://localhost:8000/covids/5xbd456xx 
                   this.http.put("http://localhost:8000/covids/" 
                 + covidID, { fabricdetails, sanitizertype, alcoholcontent, handsoaptype})
              .subscribe(() => {
                  console.log('Updated: ' + covidID);
              });
              location.reload();
    }
}
