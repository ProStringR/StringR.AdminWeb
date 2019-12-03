import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss']
})

export class ViewLoginComponent {

  // TODO Router skal fjernes helt når authguard kører.
  constructor(private authService: AuthService, private router: Router) { }

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password);
    //this.router.navigate(['/mainPage']);
  }

}
