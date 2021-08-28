import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ServiceService} from '../service.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';   
import { Rout } from '../Rout';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-root',  
  templateUrl: './registration.html',  
  styleUrls: ['./registration.css']  
})  

export class Registration {  
  title = 'FrontEnd';  
  
  
  constructor(private ServiceService: ServiceService) { }  
  data: any;  
  EmpForm!: FormGroup;  
  submitted = false;   
  EventValue: any = "Register";  

  ngOnInit(): void {   
    this.getdata(); 
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
  deleteData(id: string) {  
    this.ServiceService.deleteData(id).subscribe((data: any) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Register() {   
    //if(this.ServiceService.checkData(this.EmpForm.controls["Email"].get)){
    //  return;
    //}
  this.submitted = true;  
   if (this.EmpForm.invalid) {  
          return;              
   }  
  this.ServiceService.postData(this.EmpForm.value).subscribe((data: any) => {  
    this.data = data;  
    this.resetFrom();  
    
  })  
  
}  
//Update() {   
//  this.submitted = true;  
//  
//  if (this.EmpForm.invalid) {  
//   return;  
//  }        
//  this.ServiceService.putData(this.EmpForm.value.Id,this.EmpForm.value).subscribe((data: any) => {  
//    this.data = data;  
//    this.resetFrom();  
//  })  
//}  
//
//EditData(Data: { Id: any; Name: any; LastName: any; Email: any; PhoneNumber: any; }) {  
//  this.EmpForm.controls["Id"].setValue(Data.Id);  
//  this.EmpForm.controls["Name"].setValue(Data.Name);      
//  this.EmpForm.controls["LastName"].setValue(Data.LastName);  
//  this.EmpForm.controls["Email"].setValue(Data.Email);  
//  this.EmpForm.controls["PhoneNumber"].setValue(Data.PhoneNumber);  
//  this.EventValue = "Update";  
//}  

  resetFrom()  
  {     
    this.getdata();  
    this.EmpForm.reset();  
    this.EventValue = "Register";  
    this.submitted = false;   
  }  
}  