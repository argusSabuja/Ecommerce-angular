// import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnInit } from '@angular/core';
import { homeCarouselData } from 'src/data/mainCarouselData';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }

  autoPlay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
