import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamState } from '../interfaces/stream-state';
import { MusicService } from '../music.service';
import { TracksService } from '../services/tracks.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  directory: Array<any> = [];
  currentTrackList: Array<any> = [];
  currentTrack: any = {};

  state: StreamState;

  constructor(
    private musicService: MusicService,
    private tracksService: TracksService,
    private changeDetectionRef: ChangeDetectorRef) {

    this.musicService.getState().subscribe(state => {
      this.state = state;

      if(state.currentTime >= state.duration && state.playing === false){
        if(!this.isLastPlaying()){
          this.next();
        }
      }

      console.log(state);
    });
  }

  ngOnInit(): void {

    this.tracksService.tracks.subscribe((value) => {

      this.currentTrackList = value;
      console.log(this.currentTrackList);

      let index = 0;
      let file = this.currentTrackList[index];

      this.openTrack(file, index);

      this.changeDetectionRef.detectChanges();

    })

    this.tracksService.directory.subscribe((value) => {
      this.directory = value;
      console.log(this.directory);
      this.changeDetectionRef.detectChanges();
    });

    this.navigateDirectory("C:/Users/Ian/Music/Stream_Music");

  }

  playMusic(url) {
    this.musicService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openTrack(file, index) {
    this.currentTrack = { index, file };
    this.stop();
    this.playMusic(file);
  }

  next() {
    let index = this.currentTrack.index + 1;
    let file = this.currentTrackList[index];
    this.openTrack(file, index);
  }

  back() {
    let index = this.currentTrack.index - 1;
    let file = this.currentTrackList[index];
    this.openTrack(file, index);
  }

  isFirstPlaying() {
    return this.currentTrack.index === 0;
  }

  isLastPlaying() {
    return this.currentTrack.index === this.currentTrackList.length - 1;
  }

  stop() {
    this.musicService.stop();
  }

  canPlay() {
    return !this.state?.error || !this.currentTrack.index === undefined;
  }

  togglePlayback() {
    console.log('Toggling');
    this.musicService.togglePlay();
  }

  onSliderChangeEnd(change) {
    this.musicService.seekTo(change);
  }

  navigateDirectory(path) {
    this.tracksService.navigateDirectory(path);
  }
}
