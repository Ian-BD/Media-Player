import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm = '';
  filteredFiles: Array<any> =[];

  currentTracks: Array<any> = [];
  currentDirectory: Array<any> = [];

  viewByTrack: Boolean = true;

  viewByAlbum() {
    return !this.viewByTrack;
  }

  constructor(
    private filesService: FilesService, 
    private changeDetectionRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {

    this.filesService.currentTracks.subscribe((value) => {

      this.currentTracks = value;
      this.changeDetectionRef.detectChanges();
    })

    this.filesService.currentDirectory.subscribe((value) => {
      this.currentDirectory = value;
      console.log(value);
      this.changeDetectionRef.detectChanges();
    })

    if(this.viewByTrack){
      this.findAllTracks("C:/Users/Ian/Music/");
    } else {
      this.navigateDirectory("C:/Users/Ian/Music/");
    }

  }

  search(value){
    this.filteredFiles = this.currentTracks.filter((val) =>
    val.toLowerCase.includes(value));
  }

  setViewByTrack(){
    this.viewByTrack = true;
    this.findAllTracks("C:/Users/Ian/Music/");
  }
  
  setViewByAlbum(){
    this.viewByTrack = false;
    this.navigateDirectory("C:/Users/Ian/Music/");
  }

  findAllTracks(path){
    this.filesService.findAllTracks(path);
  }

  navigateDirectory(path) {
    this.filesService.navigateDirectory(path);
  }

}
