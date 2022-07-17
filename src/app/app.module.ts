import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
    {
      path:'user',
      component : UserComponent

    },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
