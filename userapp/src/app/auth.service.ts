import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';  
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';


interface authstruct{
  emailid: string,
  pass: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http : HttpClient) { }

  signup(email : string, password : string){
    return this.http.post('https://myapp-88384-default-rtdb.firebaseio.com/users.json', {
      emailid : email,
      pass : password
    })
  }

  login(){
    return this.http.get('https://myapp-88384-default-rtdb.firebaseio.com/users.json').pipe(
  
      map((responseData : {[key : string] : any}) => {
        const postsArray : authstruct[] = [];

        for (const key  in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
 
)
  }

  encrypt(encText : any){
    return Md5.hashStr(encText);  
  }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }    

}
