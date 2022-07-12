import { TestBed } from '@angular/core/testing';
import * as exp from 'constants';

import { MusicService } from './music.service';
import { StreamState } from './interfaces/stream-state';
import { doesNotMatch } from 'assert';

describe('MusicService', () => {
  let service: MusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicService);
    service.playStream("../assets/tests/test.mp3").subscribe();
  });

  afterEach(() => {
    service.stop();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play music', () => {
    
    let currentState : StreamState;

    let subscription = service.getState().subscribe(state => {
      currentState = state;
    });

    subscription.unsubscribe();
    expect(currentState.playing).toBeTruthy;
  });

  it('should pause music', () => {

    service.pause();

    let currentState : StreamState;

    let subscription = service.getState().subscribe(state => { 
      currentState = state;
    });

    subscription.unsubscribe();
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
});
