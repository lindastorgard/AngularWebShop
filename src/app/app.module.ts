import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { AlsolikeComponent } from './alsolike/alsolike.component';
import { Footer2Component } from './footer2/footer2.component';
import { AdminComponent } from './admin/admin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Error404Component } from './error404/error404.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './search/movie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    SearchComponent,
    CheckoutComponent,
    DetailsComponent,
    AlsolikeComponent,
    Footer2Component,
    AdminComponent,
    ThankyouComponent,
    Error404Component,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
