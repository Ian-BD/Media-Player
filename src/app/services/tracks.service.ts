import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  tracks = new BehaviorSubject<string[]>([]);
  directory = new BehaviorSubject<string[]>([]);

  constructor() {
    
    electron.ipcRenderer.on('getMusicResponse', (event, tracks) => {
      this.tracks.next(tracks);
    });

    electron.ipcRenderer.on('getDirectoryResponse', (event, directory) => {
      this.directory.next(directory);
    });

   }

   navigateDirectory(path){
    electron.ipcRenderer.send('navigateDirectory', path);
  }

}
