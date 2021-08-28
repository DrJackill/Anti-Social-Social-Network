import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ServiceService} from './service.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';   
import { Rout } from './Rout';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  

export class AppComponent {  
  title = 'FrontEnd';  
  constructor(private ServiceService: ServiceService) { }  
}  