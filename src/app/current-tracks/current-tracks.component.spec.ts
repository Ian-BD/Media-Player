import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTracksComponent } from './current-tracks.component';

describe('CurrentTracksComponent', () => {
  let component: CurrentTracksComponent;
  let fixture: ComponentFixture<CurrentTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
