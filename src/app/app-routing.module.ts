import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [

  { path: 'categories/:id', component: CategoryComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'alsolike/:id', component: DetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: '404', component: Error404Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
