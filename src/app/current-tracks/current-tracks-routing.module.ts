import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTracksComponent } from './current-tracks.component';

const routes: Routes = [
  {
    path: 'current-tracks',
    component: CurrentTracksComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenTracksRoutingModule {}
