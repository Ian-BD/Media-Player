import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TracksService } from './tracks.service';

describe('TracksService', () => {
  let service: TracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracksService);
    service.navigateDirectory('../assets/tests/test.mp3');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to navigate to a directory and find tracks', waitForAsync(() => {
    
    service.tracks.subscribe(tracks => {
      expect(tracks.length).toBeGreaterThan(1);
    })

  }));
});
