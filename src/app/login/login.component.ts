import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators   } from '@angular/forms'

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  });
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.apiService.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result)
      }, (err) => {
        console.log(err)
      }
    )
  }

}
