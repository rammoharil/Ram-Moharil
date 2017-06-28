<<<<<<< HEAD
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'technology',
  pure: false
})

export class TechnologiesPipe implements PipeTransform {

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
            
                if(value[arrycount-1].category != "Technologies")
                {
                    value.splice(arrycount-1,1);
                }
                else
                {
                    var imageUrl = value[arrycount-1].imageHref;
                    var pattern = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                            if(!pattern.test(imageUrl)) {
                                value.splice(arrycount-1,1);
                            }
                }    
            
            arrycount = arrycount -1;
        }
    }
    
    let uniqueArray = value;
    
    return uniqueArray;
  }

=======
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'technology',
  pure: false
})

export class TechnologiesPipe implements PipeTransform {

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
            
                if(value[arrycount-1].category != "Technologies")
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

>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
}