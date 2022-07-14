import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StreamState } from '../interfaces/stream-state';
import { CurrentTrack } from '../interfaces/current-track';
import { MusicService } from '../services/music.service';
import { TracksService } from '../services/tracks.service';
import { isThrowStatement } from 'typescript/lib/tsserverlibrary';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {

  private currentTrackList: Array<any> = [];
  private currentTrack: CurrentTrack;

  state: StreamState;

  shuffle: boolean = false;

  constructor(
    private musicService: MusicService,
    private tracksService: TracksService) {
  }

  ngOnInit(): void {

    this.tracksService.tracks.subscribe((value) => {
      this.currentTrackList = value;
    })

    this.tracksService.currentTrack.subscribe((value) => {
      this.currentTrack = value;
      this.openTrack(this.currentTrack.file, this.currentTrack.index);
    })

    this.musicService.getState().subscribe(state => {
      this.state = state;

      if (state.currentTime >= state.duration && state.playing === false) {
        if (!this.isLastPlaying() || this.shuffle) {
          this.next();
        }
      }
    });

    this.navigateDirectory("C:/Users/Ian/Music/Hybrid Theory");

  }

  playMusic(url) {
    this.musicService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openTrack(file, index) {
    this.stop();
    this.playMusic(file);
  }

  next() {

    let index: number;

    if (this.shuffle) {
      index = this.getRandomInt(this.currentTrackList.length - 1);
    } else {
      index = this.currentTrack.index + 1;
    }

    let file = this.currentTrackList[index];
    this.tracksService.nextTrack({index: index, file: file});
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  back() {
    let index = this.currentTrack.index - 1;
    let file = this.currentTrackList[index];
    this.tracksService.nextTrack({index: index, file: file});
  }

  stop() {
    this.musicService.stop();
  }

  pause() {
    this.musicService.pause();
  }

  togglePlayback() {
    this.musicService.togglePlay();
  }

  OnSeekTo(change) {
    this.musicService.seekTo(change);
  }

  isFirstPlaying() {
    return this.currentTrack.index === 0;
  }

  isLastPlaying() {
    return this.currentTrack.index === this.currentTrackList.length - 1;
  }

  canPlay() {
    return !this.state?.error || !this.currentTrack.index === undefined;
  }

  navigateDirectory(path) {
    this.tracksService.navigateDirectory(path);
  }
}
