import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist-save',
  templateUrl: './playlist-save.component.html',
  styleUrls: ['./playlist-save.component.scss']
})
export class PlaylistSaveComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private route: Router) { }

  playlistName: string = '';
  totalTracks: number = 0;
  ngOnInit(): void {

    this.totalTracks = this.playlistService.currentPlaylist.length;
  }

  savePlaylist(){

    this.playlistService.savePlaylist(this.playlistName);

    this.route.navigate(['/playlist-view']);
  }

}
