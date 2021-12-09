import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyProjectComponent } from './spotify-project.component';

describe('SpotifyProjectComponent', () => {
  let component: SpotifyProjectComponent;
  let fixture: ComponentFixture<SpotifyProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
