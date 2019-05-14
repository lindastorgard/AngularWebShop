import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  { path: 'search', component: SearchComponent},
  { path: 'categories/:id', component: CategoryComponent},
  { path: 'details/:id', component: DetailsComponent },
  // details
  // { path: 'details/:id', component: DetailsComponent },
  { path: '', component: HomeComponent },
  // { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
