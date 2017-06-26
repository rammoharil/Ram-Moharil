export interface IProduct { 
   title: string; 
   description: string; 
   rows:Array<{category:string,title:string,url:string,description:string,imageHref:string}>;
}