import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSaveComponent } from './playlist-save.component';

describe('PlaylistSaveComponent', () => {
  let component: PlaylistSaveComponent;
  let fixture: ComponentFixture<PlaylistSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
