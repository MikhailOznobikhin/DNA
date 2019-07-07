import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { DelComponent } from './del/del.component';
import { LikeComponent } from './like/like.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: 'del',
    component: DelComponent
  },
  {
    path: 'like',
    component: LikeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
