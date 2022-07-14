import { Component, OnInit } from '@angular/core';
import { CurrentTrack } from '../interfaces/current-track';
import { TracksService } from '../services/tracks.service';

@Component({
  selector: 'app-current-tracks',
  templateUrl: './current-tracks.component.html',
  styleUrls: ['./current-tracks.component.scss']
})
export class CurrentTracksComponent implements OnInit {

  currentTrack: CurrentTrack;
  currentTracks: string[] = [];

  constructor(private tracksService: TracksService) { }

  ngOnInit(): void {

    this.tracksService.tracks.subscribe((value) => {
      this.currentTracks = value;
    });

    this.tracksService.currentTrack.subscribe((value) => {
      this.currentTrack = value;
    });
  }

}
