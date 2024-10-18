import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AccomplishedComponent } from './pages/accomplished/accomplished.component';
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component';
import { ByuserComponent } from './pages/byuser/byuser.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AccomplishedComponent,
    UncompletedComponent,
    ByuserComponent,
    TaskComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
