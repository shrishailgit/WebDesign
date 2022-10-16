import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
//import { PayrollappComponent } from './payrollapp/payrollapp.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  //  PayrollappComponent,
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
