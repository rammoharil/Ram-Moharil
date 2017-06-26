import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import {UniqueFilterPipe} from './UniqueFilterPipe';
import {CompanyPipe} from './CompaniesPipe';
import {TechnologiesPipe} from './TechnologyPipe';
import { Home } from './home.component';
import { Companies } from './companies.component'; 
import { technology } from './technology.component';
import { ProductDetails } from './ProductDetails';  
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [ 
   { path: '', component: Home }, 
   { path: 'Home', component: Home }, 
   { path: 'Companies', component: Companies }, 
   { path: 'Technologies', component: technology }, 
   { path: 'ProductDetails', component: ProductDetails }, 
]; 

@NgModule({
  imports:      [ BrowserModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,UniqueFilterPipe, CompanyPipe,TechnologiesPipe, Home,Companies,technology,ProductDetails ],
  bootstrap:    [ AppComponent,Home,Companies,technology,ProductDetails ]
})
export class AppModule { }