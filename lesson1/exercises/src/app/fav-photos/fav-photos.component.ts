import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'ImageTitle';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.launchcode.org/assets/homepage/glasses-green-regular-5e09a997df6799538d2ae4e3875b3b3f17eafadea856f836b88eb2bf1137e708.png';
  image3 = 'https://www.launchcode.org/assets/about/AboutPage-Artboard%201%20copy%203-05ffc3064e740d2c5e0e00a9ee1d89c16a9894c6271aa8b4931097e341dd961b.png';

  constructor() { }

  ngOnInit() {
  }

}