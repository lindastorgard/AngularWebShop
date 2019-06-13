import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { IRandom } from '../Interfaces/IRandom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  random: IRandom[];

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getRandom().subscribe(
      (dataRandom) => {
        this.random = dataRandom;
      });

  }
}


