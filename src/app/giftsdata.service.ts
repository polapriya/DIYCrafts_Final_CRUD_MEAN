import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class GiftsdataService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getGiftsdata() {
        return this.http.get('http://localhost:8000/giftsdata');
    }
    addGiftsdata({ creators_name, event_category_name, recipient, age, gift_Category, gift_idea, myDatepickerr }: { creators_name: string; event_category_name: string; recipient: string; age: number; gift_Category: string; gift_idea: string; myDatepickerr: Date; }) {
        
        this.http.post('http://localhost:8000/giftsdata',{creators_name ,event_category_name, recipient, age, gift_Category, gift_idea, myDatepickerr})
      .subscribe((responseData) => {
         console.log(responseData);
       }); 
       location.reload();
       
    }
    deleteGiftsdata(giftsdataId: string) {
        this.http.delete("http://localhost:8000/giftsdata/" + giftsdataId)
          .subscribe(() => {
              console.log('Deleted: ' + giftsdataId);
          });
          location.reload();
      }
    
      updateGiftsdata(giftsdataId: string, creators_name: string, event_category_name: string, recipient: string, age: number, gift_Category: string, gift_idea: string, myDatepickerr: Date) {
        //request path http://localhost:8000/students/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/giftsdata/" 
                 + giftsdataId,{ creators_name ,event_category_name, recipient, age, gift_Category, gift_idea, myDatepickerr })
              .subscribe(() => {
                  console.log('Updated: ' + giftsdataId);
              });
        }    
}
