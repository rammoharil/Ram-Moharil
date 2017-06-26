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
    
    iproducts: IItem; 
   constructor(private _product: ProductService){ 
   } 
   ngOnInit() : void { 
      this.iproducts = JSON.parse(localStorage.getItem("ItemDetails"));
   }

   public DownloadPDF(product:IItem)
   {
//     var specialElementHandlers = {
//     '#editor': function () {
//         return true;
//     }
// };   
       


// var imgbasestr;
// var xhr = new XMLHttpRequest();
//   xhr.onload = function() {
//     var reader = new FileReader();
//     reader.onloadend = function() {
//         alert(reader.result);
//       imgbasestr = reader.result;
//     }
//     reader.readAsDataURL(xhr.response);
//   };
//   xhr.open('GET','https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0');
//   xhr.responseType = 'blob';
//   xhr.send();



//        let pdf = new jsPDF();
//        console.log(document.getElementById('rammoharil').innerHTML);
//        pdf.addImage(imgbasestr, 'PNG', 15, 40, 100, 100);
//        pdf.fromHTML(document.getElementById('rammoharil').innerHTML, 0, 0, {
//         'width': 100,
//             'elementHandlers': specialElementHandlers
//     }, function() {   pdf.save('saveInCallback.pdf');
//     }, );
    
    var printButton = document.getElementById("printbtn");
    var menu = document.getElementById("menu");
        //Set the print button visibility to 'hidden' 
        printButton.style.display = 'none';
        menu.style.display = 'none';
    window.print();
    printButton.style.display = 'block';
    menu.style.display = 'block';
   }
} 