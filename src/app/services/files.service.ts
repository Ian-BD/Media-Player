import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  currentTracks = new BehaviorSubject<string[]>([]);
  currentDirectory = new BehaviorSubject<string[]>([]);

  constructor() { 

    electron.ipcRenderer.on('getMusicResponse', (event, tracks) => {
      this.currentTracks.next(tracks);
    });

    electron.ipcRenderer.on('getDirectoryResponse', (event, directory) => {
      this.currentDirectory.next(directory);
    });

    electron.ipcRenderer.on('getAllTracksResponse', (event, tracks) => {
      console.log("Tracks");
      console.log(tracks);
      this.currentTracks.next(tracks);
    });

  }

  navigateDirectory(path){
    electron.ipcRenderer.send('navigateDirectory', path);
  }

  findAllTracks(path){
    electron.ipcRenderer.send('findAllTracks', path);
  }
}
