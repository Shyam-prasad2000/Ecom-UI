import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(
   private http:HttpClient
  ) { }
  
  backEndURL:any='http://localhost:3000/'

  getProductList(){
   return(this.http.request('GET', this.backEndURL+'general/example' , { })) 
  }

}
