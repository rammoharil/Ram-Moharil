import { Component, Pipe, PipeTransform } from '@angular/core';

import { ProductService } from './products.service'; 

import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import { IProduct } from './Products'; 


@Component ({ 
   selector: 'my-app',
   template: ' <title>{{iproducts?.title}}</title> <div class="wrapper"><div class="top"></div><ul class="navigation"><li><a routerLink ="/Home" title="Home">Home</a></li><li *ngFor="let menu of iproducts?.rows | UniqueFilter"><a routerLink="/{{menu.category}}">{{menu.category}}</a></li><div class="clear"></div></ul><router-outlet></router-outlet></div>',
   providers: [ProductService],
   styles: [],
})  

export   class   AppComponent  {  
   iproducts: IProduct[]; 
   constructor(private _product: ProductService){ 
   } 
   ngOnInit() : void { 
      this._product.getproducts() 
      .subscribe(iproducts => this.iproducts = iproducts); 
      
   } 

   
}