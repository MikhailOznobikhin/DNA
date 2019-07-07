import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { DelComponent } from './del/del.component';
import { LikeComponent } from './like/like.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http'
import { EmjService } from './service/emj.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './service/search.pipe';

const appRoutes: Routes = [
  { path: 'app-like', component: LikeComponent},
  { path: 'app-del', component: DelComponent},
  { path: 'app-all', component: AllComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    DelComponent,
    LikeComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmjService],
  bootstrap: [AppComponent]
})
export class AppModule { }
