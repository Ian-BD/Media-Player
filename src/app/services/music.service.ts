import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { StreamState } from '../interfaces/stream-state';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private stop$ = new Subject();
  private audio = new Audio();

  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  constructor() { 
    //TODO:Remove this
    this.setVolume(.2);
  }

  playStream(url){
    return this.streamAudio(url).pipe(takeUntil(this.stop$));
  }

  private streamAudio(url){
    return new Observable(observer => {
      //Start playing audio
      this.audio.src = url;
      this.audio.load();
      this.audio.play();

      const handler = (event : Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audio, this.audioEvents, handler);

      return () => {
        //Stop music
        this.audio.pause();
        this.audio.currentTime = 0;
        this.removeEvents(this.audio, this.audioEvents, handler);
        this.resetState();
      };
    });
  }

  private addEvents(audio, events, handler) {
    events.forEach(event => {
      audio.addEventListener(event, handler);
    });
  }

  private removeEvents(audio, events, handler) {
    events.forEach(event => {
      audio.removeEventListener(event, handler);
    });
  }

  play(){
    this.audio.play();
  }

  pause(){
    this.audio.pause();
  }

  togglePlay(){
    if(this.audio.paused){
      this.play();
    } else {
      this.pause();
    }
  }

  stop(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  seekTo(seconds){
    this.audio.currentTime = seconds;
  }

  setVolume(volume){
    //clamp value between 0 and 1
    volume = Math.min(Math.max(volume, 0), 1);
    this.audio.volume = volume;
  }

  volume(){
    return this.audio.volume;
  }

  mute(){
    this.audio.muted = true;
  }

  unmute(){
    this.audio.muted = false;
  }

  toggleMute(){
    this.audio.muted != this.audio.muted;
  }

  muted(){
    return this.audio.muted;
  }
  
  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audio.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = this.audio.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }
}
