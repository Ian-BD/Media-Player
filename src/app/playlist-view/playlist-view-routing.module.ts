import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistViewComponent } from './playlist-view.component';

const routes: Routes = [
  {
    path: 'playlist-view',
    component: PlaylistViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistViewRoutingModule {}
