import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonCrawlerComponent } from './dungeon-crawler.component';

describe('DungeonCrawlerComponent', () => {
  let component: DungeonCrawlerComponent;
  let fixture: ComponentFixture<DungeonCrawlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonCrawlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonCrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
