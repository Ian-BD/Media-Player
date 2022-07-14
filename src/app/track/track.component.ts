import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit, OnChanges {

  @Input() filepath = '';
  name = '';

  @Input() songSelect = false;
  selected = false;
  @Output() onSelectChange = new EventEmitter<string>();

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){

      this.filepath = changes.filepath.currentValue;
      this.name = this.filepath.replace(/\.[^/.]+$/, ""); //Remove .*
      this.name = this.name.substring(this.name.lastIndexOf('/')+1, this.name.length); //Remove file path
  }

  onCheckboxChange(){
    this.playlistService.toggleSongAdd(this.filepath);
  }

}
