import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccomplishedComponent } from './pages/accomplished/accomplished.component';
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component';
import { ByuserComponent } from './pages/byuser/byuser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'accomplished',
    component: AccomplishedComponent,
  },
  {
    path: 'uncompleted',
    component: UncompletedComponent,
  },
  {
    path: 'byuser',
    component: ByuserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
