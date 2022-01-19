import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class listDataService{
   
  
  
  constructor(private http:HttpClient) { }
   public listTableData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
   }
}
