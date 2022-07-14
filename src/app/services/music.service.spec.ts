import { TestBed } from '@angular/core/testing';

import { MusicService } from './music.service';
import { StreamState } from '../interfaces/stream-state';
import { Subscription } from 'rxjs/internal/Subscription';

describe('MusicService', () => {
  let service: MusicService;
  let currentState: StreamState;
  let stateSubscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicService);
    service.playStream("../assets/tests/test.mp3").subscribe();

    stateSubscription = service.getState().subscribe(state => {
      currentState = state;
      console.log(currentState);
    });
  });

  afterEach(() => {
    stateSubscription.unsubscribe();
    service.stop();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play music', () => {
    expect(currentState.playing).toBeTrue;
  });

  it('should pause music', () => {
    service.pause();
    expect(currentState.playing).toBeFalsy; 
  });

  it('should mute music', () => {

    service.mute();

    expect(service.muted).toBeTruthy();
  });

  it('should alter the volume of music', () => {
    
    let previousVolume = service.volume();

    service.setVolume(.5);

    expect(service.volume()).toBeLessThan(previousVolume);

  });

  it('should be able to seek a dfferent time in the track', () => {
    
    let previousTime = service.currentTime();
    service.seekTo(20);

    expect(service.currentTime()).toBeGreaterThan(previousTime);

  });
});
