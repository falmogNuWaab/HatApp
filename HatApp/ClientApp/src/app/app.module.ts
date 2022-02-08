import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateHatComponent } from './create-hat/create-hat.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyHatsComponent } from './my-hats/my-hats.component';
import { ShowHatsComponent } from './show-hats/show-hats.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HatService } from './hat.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CreateHatComponent,
    CreateUserComponent,
    MyHatsComponent,
    ShowHatsComponent,
    ShowUsersComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'ShowHats', component: ShowHatsComponent },
      { path: 'CreateHat', component: CreateHatComponent },
      { path: 'ShowUsers', component: ShowUsersComponent},
      { path: 'CreateUser', component: CreateUserComponent },
      { path: 'ShowUsers/MyHats/:id', component: MyHatsComponent }      
    ])
  ],
  providers: [HatService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
