import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
  
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule }    from '@angular/common/http';  
import {ServiceService} from './service.service';  
import {Routes, RouterModule} from '@angular/router';
import { AccPage }   from './AccPage/AccPage'
import {Registration} from './Registr/registration'
import { SuccesIn } from './SuccesIn/SuccesIn';
const appRoutes: Routes =[
  { path: 'registr', component: Registration},
    { path: 'signin', component: AccPage},
    { path: 'sucin', component: SuccesIn}
];
@NgModule({  
  declarations: [  
    AppComponent  
    ,AccPage
    ,Registration
    ,SuccesIn
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule  ,
    RouterModule.forRoot(appRoutes)
  
  ],  
  providers: [ServiceService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  