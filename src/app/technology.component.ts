import { Component, Pipe, PipeTransform } from '@angular/core';

import { ProductService } from './products.service'; 

import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import { IProduct } from './Products'; 
import { IItem } from './ItemDetails'; 
import {Router} from '@angular/router'
@Component ({  
   selector: 'demo-app',  
   templateUrl: 'app/Technology.html', 
   providers: [ProductService],
})  
export class technology  {  
    iproducts: IProduct[]; 
   constructor(private _product: ProductService,private router: Router){ 
   } 
   ngOnInit() : void { 
      this._product.getproducts() 
      .subscribe(iproducts => this.iproducts = iproducts); 
   }

   CompanyRowClick(item:IItem){
       localStorage.setItem("ItemDetails",JSON.stringify(item));
       this.router.navigate(['/ProductDetails']);
   }
} 