import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl(''),
    password: new FormControl('', Validators.required),
  });
  
  
  constructor() { }

  ngOnInit() {
  }

}
