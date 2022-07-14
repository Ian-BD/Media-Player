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

  constructor() {
    
    electron.ipcRenderer.on('getTrackResponse', (event, tracks) => {
      this.setTracks(tracks);
    });

   }

   nextTrack(newTrack: CurrentTrack){
    this.currentTrack.next(newTrack);
   }

   setTracks(tracks){
    this.tracks.next(tracks);
    this.currentTrack.next({ index: 0, file: tracks[0] });
   }

   navigateDirectory(path){
    electron.ipcRenderer.send('setTrackDirectory', path);
  }

}
