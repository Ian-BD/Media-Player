import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistcreationComponent } from './playlist-creation.component';

describe('PlaylistcreationComponent', () => {
  let component: PlaylistcreationComponent;
  let fixture: ComponentFixture<PlaylistcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
