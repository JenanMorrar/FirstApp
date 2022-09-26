import { Component, OnInit } from '@angular/core';
import {GifsService} from "../gifs.service";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  // public gifs = [
  //   {"id":1, "name":"gif1"},
  //   {"id":2, "name":"gif2"},
  //   {"id":3, "name":"gif3"}
  // ];
   gifs: any
  constructor(private _gifsService:GifsService) { }

  ngOnInit(): void {
    //this.gifs = this._gifsService.getGifs();
    this._gifsService.getGifs()
      .subscribe(response => {
        this.gifs = response;
        console.log(response);
        console.log(this.gifs);
      });
  }
}
