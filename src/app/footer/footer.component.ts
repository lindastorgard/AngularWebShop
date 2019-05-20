import { Component, OnInit } from '@angular/core';
import { ICategories } from '../Interfaces/ICategories';
import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categories: ICategories[];

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getCategories().subscribe(
      (dataCategories) => 
      { 
        this.categories = dataCategories; 
        // console.log(dataCategories);
      });
  }
}


