<<<<<<< HEAD
import { Injectable } from '@angular/core'; 
import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { IProduct } from './Products';  

@Injectable() 
export class ProductService { 
    
   //private _producturl='app/Data.json'; 
   private _producturl='https://dl.dropboxusercontent.com/s/nlpz9o8o5e1t602/Data.json/dl=0'; 
   constructor(private _http: Http){} 
   getproducts(): Observable<IProduct[]> {

      return this._http.get(this._producturl) 
      .map((response: Response) => <IProduct[]> response.json()) 
      .map(data => data)
   } 
=======
import { Injectable } from '@angular/core'; 
import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { IProduct } from './Products';  

@Injectable() 
export class ProductService { 
    
   //private _producturl='app/Data.json'; 
   private _producturl='https://dl.dropboxusercontent.com/s/nlpz9o8o5e1t602/Data.json/dl=0'; 
   constructor(private _http: Http){} 
   getproducts(): Observable<IProduct[]> {

      return this._http.get(this._producturl) 
      .map((response: Response) => <IProduct[]> response.json()) 
      .map(data => data)
   } 
>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
} 