import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authserver : AuthService, private route : Router) { }

  ngOnInit(): void {

  }

  onSubmit(formData : NgForm){

    const value = formData.value
    console.log(value)
    console.log(this.authserver.encrypt(value.password))
    this.authserver.login().subscribe(
      res => {
        const user = res.find(
          (a : any) => {
            console.log(a)
            return a.emailid == value.email &&  a.pass == this.authserver.encrypt(value.password)
          }
        );
      if (user){
        alert("irukan");
        this.route.navigate(['userlist']);
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', user.emailid );  
        console.log(user)

      }
      else
      {
        alert('illa');
      }
      }

    )


  }
}
