import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  images = [
    {path: '/assets/rock.JPG'},
    {path: '/assets/skis.jpg'},
    {path: '/assets/bird.jpg'},
  ];
}