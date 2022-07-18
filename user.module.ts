import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserComponent } from '../user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,

  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot([
    {
      path:'User',
      component : UserComponent

    },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class userModule { }
