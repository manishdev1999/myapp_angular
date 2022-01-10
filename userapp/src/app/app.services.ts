import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { userData } from './userdata';
@Injectable(
    {
        providedIn : 'root'
    }
)
export class data {

  constructor(private http: HttpClient) { }

  _userData : any = []

  putData(value : any){
    return this.http.post('https://myapp-88384-default-rtdb.firebaseio.com/userdata.json',value)
  }


  getData(){
    return this.http.get<userData>('https://myapp-88384-default-rtdb.firebaseio.com/userdata.json').pipe(
  
            map((responseData : {[key : string] : any}) => {
              const postsArray : userData[] = [];
      
              for (const key  in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
       
    )
        }

    deleteData(value : any)
    {
       return this.http.delete('https://myapp-88384-default-rtdb.firebaseio.com/userdata.json',value)
    }

  
}