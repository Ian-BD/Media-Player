import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentTrack } from '../interfaces/current-track';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  currentTrack = new BehaviorSubject<CurrentTrack>({index: -1, file: ""});
  tracks = new BehaviorSubject<string[]>([]);
  directory = new BehaviorSubject<string[]>([]);

  constructor() {
    
    electron.ipcRenderer.on('getTrackResponse', (event, tracks) => {
      this.tracks.next(tracks);
    });

    electron.ipcRenderer.on('getTrackDirectoryResponse', (event, directory) => {
      this.directory.next(directory);
    });

   }

   nextTrack(newTrack: CurrentTrack){
    this.currentTrack.next(newTrack);
   }

   setTracks(tracks){
    console.log(this.tracks);
    console.log(tracks);
    this.tracks.next(tracks);
   }

   navigateDirectory(path){
    electron.ipcRenderer.send('setTrackDirectory', path);
  }

}
