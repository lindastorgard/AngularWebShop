import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  myCart: IMovie[] = [];

  constructor() { }

  ngOnInit() {

    if (sessionStorage) {
      this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
      console.log(this.myCart);
    }
  }

}
