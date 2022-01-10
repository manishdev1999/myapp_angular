import { Component, OnInit, Input } from '@angular/core';
import { data } from 'src/app/app.services';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [
    data
  ]
})
export class UserdetailsComponent implements OnInit {

  @Input() _selecteduser : any; 

  constructor(private dataservice : data) { }

  ngOnInit(): void {
  }

}
