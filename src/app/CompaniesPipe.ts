import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company',
  pure: false
})

export class CompanyPipe implements PipeTransform {

transform(value: any, args?: any): any {
    
    // Remove the duplicate elements
    // let uniqueArray = value.filter(function (el, index, array) { 
    //   return array.indexOf(el) == index;
    // });
    
    if(value != null)
    {
        var arrycount = value.length;
        while(arrycount > 0)
        {
            
                if(value[arrycount-1].category != "Companies")
                {
                    value.splice(arrycount-1,1);
                }
                else
                {
                    var imageUrl = value[arrycount-1].imageHref;
                    var http = new XMLHttpRequest();

    http.open('HEAD', imageUrl, false);
    http.send();

    if(http.status == 404)
    {
        value.splice(arrycount-1,1);
    }
                }    
            
            arrycount = arrycount -1;
        }
    }
    
    let uniqueArray = value;
    
    return uniqueArray;
  }

}