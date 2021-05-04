import {Component, OnInit, ViewChild} from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slide-image',
  template: `
    <ng-image-slider [images]="imageObject" #nav>
    </ng-image-slider>
    <button (click)="prevImageClick()">Prev</button>
    <button (click)="nextImageClick()">Next</button>
  `,
  styles: ['']
})
export class SlideImageComponent implements OnInit {

  constructor() { }
  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject = [
    {
      image: 'https://roses.co.il/image/cache/catalog/main-banner-2-1903x774.jpg',
      thumbImage: 'https://roses.co.il/image/cache/catalog/main-banner-2-1903x774.jpg',
      alt: 'alt of image',
      title: 'title of image'
    },
    {
      image: 'https://roses.co.il/image/cache/catalog/main-banner-1-1903x774.jpg',
      thumbImage: 'https://roses.co.il/image/cache/catalog/main-banner-2-1903x774.jpg',
      alt: 'alt of image',
      title: 'title of image'
    },
    {
      image: 'https://www.jk.hk/app/sites/test5/images/img_large_1.jpg',
      thumbImage: 'https://roses.co.il/image/cache/catalog/main-banner-2-1903x774.jpg',
      alt: 'alt of image',
      title: 'title of image'
    },
    {
      image: 'https://www.flowershops.co.uk/pub/top_banner.jpg',
      thumbImage: 'https://roses.co.il/image/cache/catalog/main-banner-2-1903x774.jpg',
      alt: 'alt of image',
      title: 'title of image'
    }
  ];

  ngOnInit(): void {
  }

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}

