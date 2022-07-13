import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { PlayerRoutingModule } from './player/player-routing.module';
import { MainMenuRoutingModule } from './main-menu/main-menu-routing.module';
import { SearchRoutingModule } from './search/search-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    MainMenuRoutingModule,
    SearchRoutingModule,
    PlayerRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
