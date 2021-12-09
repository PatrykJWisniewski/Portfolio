import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  images = [
    {path: '/assets/rock.JPG'},
    {path: '/assets/skis.jpg'},
    {path: '/assets/bird.jpg'},
  ];

  constructor(private route:Router){} 

  ngOnInit(): void {
    this.route.navigate(['/portfolio']);
  }
}
