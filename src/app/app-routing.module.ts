import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/match/add/add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
