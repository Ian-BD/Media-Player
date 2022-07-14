import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistcreationComponent } from './playlist-creation.component';

const routes: Routes = [
  {
    path: 'playlist-creation',
    component: PlaylistcreationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistCreationRoutingModule {}
