import { Component, Pipe, PipeTransform } from '@angular/core';

import { ProductService } from './products.service'; 

import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import { IProduct } from './Products'; 
import { IItem } from './ItemDetails'; 
import {Router} from '@angular/router'
declare let jsPDF:any;
@Component ({  
   selector: 'demo-app',  
   templateUrl: 'app/Companies.html', 
   providers: [ProductService],
})  
export class Companies  {  
    iproducts: IProduct[]; 
   constructor(private _product: ProductService,private router: Router){ 
   } 
   ngOnInit() : void { 
      this._product.getproducts() 
      .subscribe(iproducts => this.iproducts = iproducts); 
   }

   CompanyRowClick(item:IItem){
       localStorage.setItem("ItemDetails",JSON.stringify(item));
       //window.location.href='/ProductDetails';
       this.router.navigate(['/ProductDetails']);
   }

   public DownloadPDF()
   {
       var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('Test.pdf');
   }
} 