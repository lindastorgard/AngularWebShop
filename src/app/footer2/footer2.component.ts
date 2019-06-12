import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ICategories } from '../Interfaces/ICategories';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  categories: ICategories[];

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getCategories().subscribe(
      (dataCategories) => {
        this.categories = dataCategories;
      });
  }
}
