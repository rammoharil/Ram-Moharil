import { Component, Pipe, PipeTransform,ViewChild,ElementRef } from '@angular/core';

import { ProductService } from './products.service'; 

import { Http , Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';  
import { IItem } from './ItemDetails'; 

declare let jsPDF:any;
declare let html2canvas:any;
declare let prodImage:HTMLImageElement;
@Component ({  
   selector: 'demo-app',  
   templateUrl: 'app/Pages/ProductDetails.html', 
   providers: [ProductService],
})  
export class ProductDetails  {  
    
    iproducts: IItem; 
   constructor(private _product: ProductService){ 
   } 
   ngOnInit() : void { 
      
      this.iproducts = JSON.parse(localStorage.getItem("ItemDetails"));
      
      //var myimg = localStorage.getItem('productImage');
      this.iproducts.imageHref = localStorage.getItem('productImage');
   }




   public DownloadPDF(product:IItem)
   {
       //html2canvas(document.getElementById('rammoharil'),{
        html2canvas(document.body,{
           onrendered: function(canvas:any)
           {
               var img = canvas.toDataURL("image/png");
               var doc = new jsPDF();
               doc.addImage(img,"JPEG",0,0);
               doc.save('ItWorks.pdf');
           }
       });
    // var printButton = document.getElementById("printbtn");
    // var menu = document.getElementById("menu");
    //     //Set the print button visibility to 'hidden' 
    //     printButton.style.display = 'none';
    //     menu.style.display = 'none';
    // window.print();
    // printButton.style.display = 'block';
    // menu.style.display = 'block';
   }
} 