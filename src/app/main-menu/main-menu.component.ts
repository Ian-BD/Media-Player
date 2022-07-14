import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';
import { TracksService } from '../services/tracks.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  trackName: string = '';

  currentTrackIndex: number = 0;
  totalTracks: number = 0;

  constructor(private tracksService: TracksService) { }

  ngOnInit(): void {

    this.tracksService.currentTrack.subscribe((value) => {

      console.log("Menu spotted current Track change");
      console.log(value);
      this.trackName = value.file.replace(/\.[^/.]+$/, ""); //Remove .*
      this.trackName = this.trackName.substring(this.trackName.lastIndexOf('/')+1, this.trackName.length); //Remove file path

      this.currentTrackIndex = value.index + 1;
    })

    this.tracksService.tracks.subscribe((value) => {
      this.totalTracks = value.length;
    })

  }

}
