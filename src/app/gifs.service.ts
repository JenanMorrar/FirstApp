import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private http:HttpClient) { }

  private  url = "https://api.giphy.com/v1/gifs/trending?api_key=SwLB6WOTZkLam6ybIwDa1DSJUtnCKZJe&limit=25&rating=g";
  getGifs(){
    // return [
    //   {"id":1, "name":"gif1"},
    //   {"id":2, "name":"gif2"},
    //   {"id":3, "name":"gif3"},
    //   {"id":4, "name":"gif4"}
    // ];
    return this.http.get(this.url);
  }
}
