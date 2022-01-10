import { Component, OnInit } from '@angular/core';
import { data } from '../app.services';
import { userData } from '../userdata';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  _fetcheddata : userData[] = []

  _selected : userData[] = []

  constructor(private userData: data) { }

  ngOnInit(): void {
    this.userData.getData().subscribe(
      responsedata => {
        this._fetcheddata = responsedata
        console.log(this._fetcheddata)
      }
    )
  }

  onData(event : any){
    this._selected = event
    console.log(event)
  }


}
