import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { TracksService } from '../services/tracks.service';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

  playlistNames: string[] = [];

  constructor(
    private playlistService: PlaylistService, 
    private tracksService: TracksService, 
    private route: Router) { 
    this.playlistNames = playlistService.playlistNames;
  }

  ngOnInit(): void {
  }

  startPlaylist(playlistName){

    console.log("start playlist: " + playlistName);

    this.tracksService.setTracks(this.playlistService.getPlaylist(playlistName));
    this.route.navigate(['/main-menu']);

  }

}
