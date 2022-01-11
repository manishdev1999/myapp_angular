import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authserver : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formData : NgForm){

    const value = formData.value
    // console.log(value)
    
    const ee = this.authserver.encrypt(value.password)
    // console.log(ee)

    // const ef = this.authserver.decrypt(ee)
    // console.log(ef)

    this.authserver.signup(value.email, ee).subscribe(
      res => {
        console.log(res)
      }
    )

  }

}
