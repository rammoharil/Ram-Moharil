import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UniqueFilter',
  pure: false
})

export class UniqueFilterPipe implements PipeTransform {
transform(value: any, args?: any): any {
    
    //select the distinct menu items from json object
    //if item is repeated, ignore the repeated item
    
    if(value != null)
    {
        var arrycount = value.length;
        var prevValue = null;
        while(arrycount > 0)
        {
            
                if(prevValue == value[arrycount-1].category)
                {
                    value.splice(arrycount-1,1);
                }
                prevValue = value[arrycount-1].category;
            
            arrycount = arrycount -1;
        }
    }
    
    let uniqueArray = value;
    
    return uniqueArray;
  }
}