import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistSaveComponent } from './playlist-save.component';

const routes: Routes = [
  {
    path: 'playlist-save',
    component: PlaylistSaveComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistSaveRoutingModule {}
