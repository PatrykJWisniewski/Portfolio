import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BroccolisJourneyComponent } from './broccolis-journey/broccolis-journey.component';
import { DungeonCrawlerComponent } from './dungeon-crawler/dungeon-crawler.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SpotifyProjectComponent } from './spotify-project/spotify-project.component';

const routes: Routes = [
  { path: 'dungeonCrawlerComponent', component: DungeonCrawlerComponent },
  { path: 'broccolisJourneyComponent', component: BroccolisJourneyComponent },
  { path: 'spotifyProjectComponent', component: SpotifyProjectComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
