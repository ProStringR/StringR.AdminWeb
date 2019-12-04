import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})

export class ViewLoginComponent {

  form;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value.username, this.form.value.password);
    }
    //this.router.navigate(['/mainPage']);
  }

}
