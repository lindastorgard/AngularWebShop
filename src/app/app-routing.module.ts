import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [

  // { path: 'search', component: SearchComponent},
  { path: 'categories/:id', component: CategoryComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'alsolike/:id', component:DetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: HomeComponent },
  // { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
