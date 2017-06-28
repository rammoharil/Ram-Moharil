<<<<<<< HEAD
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
       
var img = new Image();
img.setAttribute('crossOrigin', 'anonymous');
    var dataURL;
    img.src = item.imageHref;
	img.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL('image/png');
        localStorage.setItem('productImage',dataURL);
    }
       localStorage.setItem("ItemDetails",JSON.stringify(item));
       setTimeout(function() {
       //this.router.navigate(['/ProductDetails']);    
       window.location.href='ProductDetails';
       }, 2000);       
   }
=======
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
>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
} 