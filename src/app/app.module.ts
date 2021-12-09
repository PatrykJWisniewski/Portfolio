import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DungeonCrawlerComponent } from './dungeon-crawler/dungeon-crawler.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SpotifyProjectComponent } from './spotify-project/spotify-project.component';
import { BroccolisJourneyComponent } from './broccolis-journey/broccolis-journey.component';

@NgModule({
  declarations: [
    AppComponent,
    DungeonCrawlerComponent,
    PortfolioComponent,
    SpotifyProjectComponent,
    BroccolisJourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
