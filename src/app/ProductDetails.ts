import { Component, Pipe, PipeTransform,ViewChild,ElementRef } from '@angular/core';

import { ProductService } from './products.service'; 

import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import { IItem } from './ItemDetails'; 
declare let jsPDF:any;
@Component ({  
   selector: 'demo-app',  
   templateUrl: 'app/ProductDetails.html', 
   providers: [ProductService],
})  
export class ProductDetails  {  
    @ViewChild('keywordsInput') el: ElementRef;
    iproducts: IItem; 
   constructor(private _product: ProductService){ 
   } 
   ngOnInit() : void { 
      this.iproducts = JSON.parse(localStorage.getItem("ItemDetails"));
   }

   public DownloadPDF()
   {
       
       let pdf = new jsPDF();
        let options = {
            pagesplit: true
        };
        pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
            pdf.save("test1.pdf");
        });
   }
} 