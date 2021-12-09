import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dungeon-crawler',
  templateUrl: './dungeon-crawler.component.html',
  styleUrls: ['./dungeon-crawler.component.scss']
})
export class DungeonCrawlerComponent{
  images = [
    {path: 'rock.jpg'},
    {path: '/assets/skis.jpg'},
    {path: '/assets/bird.jpg'},
  ];
}
