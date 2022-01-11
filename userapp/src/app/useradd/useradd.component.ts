import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { data } from '../app.services';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
  // encapsulation: ViewEncapsulation.None,

})
export class UseraddComponent{

  _isloading = false
  _success = false

  constructor(private dataSer : data) { }


  ngOnInit(): void {
    const id = localStorage.getItem('token');  
    console.log(id);  
  }



  onSubmit(formData : NgForm){

    this._isloading = true
    const value = formData.value
    this.dataSer.putData(value).subscribe(
      resdata => {
        console.log(resdata)
        this._isloading = false
        this._success = true
        
      },
      error => {
        alert("Error Occured")
      }
    )

  }


  


}
