import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'technology',
  pure: false
})

export class TechnologiesPipe implements PipeTransform {

transform(value: any, args?: any): any {
    
    //Take the rows matching technologies only
    //If the image url is invalid, discard the row
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
                            else
                            {
                                var filename = imageUrl.split('/').pop();
                                var arr = filename.split('?');
                                filename = arr[0];
                                console.log(filename);
                                
                                var imagePattern =/\.(gif|jpg|jpeg|tiff|png)$/i;
                                if(!imagePattern.test(filename))
                                {
                                    value.splice(arrycount-1,1);
                                }
                            }
                }    
            
            arrycount = arrycount -1;
        }
    }
    
    let uniqueArray = value;
    
    return uniqueArray;
  }

}