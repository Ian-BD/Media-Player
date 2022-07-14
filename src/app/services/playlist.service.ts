import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlistNames: string[] = [];
  currentPlaylist: string[] = [];

  constructor() { 

    //Ensure array is still created even if no playlists exist
    this.playlistNames = JSON.parse(localStorage.getItem("playlists")) ?? [];

    console.log('Playlist Component INIT');
    console.log(this.playlistNames);

  }

  toggleSongAdd(filename: string){

    /*We use the existence of the filename in the player 
      to determine whether we add it or not*/
    if(this.currentPlaylist.indexOf(filename) > -1){
      this.currentPlaylist.splice(this.currentPlaylist.indexOf(filename), 1);
    } else {
      this.currentPlaylist.push(filename);
    }

    console.log(this.currentPlaylist);
  }

  savePlaylist(name){

    localStorage.setItem(name, JSON.stringify(this.currentPlaylist));
    this.playlistNames.push(name);
    localStorage.setItem("playlists", JSON.stringify(this.playlistNames));
  }

  getPlaylist(name): string[] {
    return JSON.parse(localStorage.getItem(name));
  }
}
