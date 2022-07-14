import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchMenuComponent } from '../search-menu/search-menu.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchMenuComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMenuRoutingModule {}
