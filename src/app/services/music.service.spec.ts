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
      console.log(state);
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
    console.log(currentState);
    expect(currentState.playing).toBeTruthy;
  });

  // it('should pause music', () => {

  //   service.pause();

  //   let currentState : StreamState;

  //   let subscription = service.getState().subscribe(state => { 
  //     currentState = state;
  //   });

  //   subscription.unsubscribe();
  //   expect(currentState.playing).toBeFalsy; 
  // });

  // it('should mute music', () => {

  //   service.mute();

  //   expect(service.muted).toBeTruthy();
  // });

  // it('should alter the volume of music', () => {
    
  //   let previousVolume = service.volume();

  //   service.setVolume(.5);

  //   expect(service.volume()).toBeLessThan(previousVolume);

  // });

  // it('should be able to seek a dfferent time in the track', () => {
    
  //   let currentState : StreamState;

  //   let subscription = service.getState().subscribe(state => { 
  //     currentState = state;
  //     console.log(state);
  //   });

  //   let previousTime = currentState.currentTime;
  //   console.log(currentState);
  //   service.seekTo(currentState.duration / 2);
  //   subscription.unsubscribe();

  //   expect(currentState.currentTime).toBeGreaterThan(previousTime);

  // });
});
