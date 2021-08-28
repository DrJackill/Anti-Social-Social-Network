import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({  
    selector: 'app-root',  
    templateUrl: './AccPage/AccPage.html'
  })  

export class Rout implements OnInit {
    static rout : Router;

    constructor(private router: Router) {
        Rout.rout = router;
    }
    ngOnInit(): void {
    }

    static gotoHome(){
        this.rout.navigate(['./AccPage/AccPage.html']);  // define your component where you want to go
    }

}