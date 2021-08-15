import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      fcEmail: ['', [Validators.required]],
      fcPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    console.log(this.form.value);
    this.userService.login(this.form.value.fcEmail, this.form.value.fcPassword)
  }

}
