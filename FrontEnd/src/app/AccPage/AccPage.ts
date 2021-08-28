import { FormGroup, FormControl,Validators, EmailValidator } from '@angular/forms';   
import { Component} from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
    selector: 'app-root',
    templateUrl: `./AccPage.html`,
    styleUrls: ['./AccPage.css']
})
export class AccPage {
    constructor(private ServiceService: ServiceService) { }  
  data: any;  
  EmpForm!: FormGroup;  
  submitted = false;   
  EventValue: any = "SignIn";  

  ngOnInit(): void {    
    this.EmpForm = new FormGroup({  
      Id: new FormControl(null),  
      Name: new FormControl("",[Validators.required]),        
      LastName: new FormControl("",[Validators.required]),  
      Email:new FormControl("",[Validators.required]),  
      PhoneNumber: new FormControl("",[Validators.required]),  
    })    
  }
  

  getdata() {  
    this.ServiceService.getData().subscribe((data: any) => {  
      this.data = data;  
    })  
  }  

  SignIn() {   
    this.submitted = true;  
     if (this.EmpForm.invalid) {  
            return;              
     }  
    if(this.ServiceService.checkData(this.EmpForm.controls["Email"].get, this.EmpForm.controls["PhoneNumber"].get)){
        return;
    }
    
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.EmpForm.reset();  
    this.EventValue = "SignIn";  
    this.submitted = false;   
  }  
 }