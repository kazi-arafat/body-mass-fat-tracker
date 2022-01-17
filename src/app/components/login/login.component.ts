import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BodyMetricApiService } from 'src/app/services/body-metric-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private bodyMetricApiService: BodyMetricApiService,
    private router: Router
  ) { }
  
  authenticated: Boolean = false;

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    let loginFormData = loginForm.value;
    if (loginFormData.username.includes('@')) {
      loginFormData.email = loginFormData.username;
      loginFormData.username = '';
    } else {
      loginFormData.email = '';
    }
    this.bodyMetricApiService.verifyLogin(loginFormData).subscribe((res) => {
      console.log(res);
      const status: number = res.status;
      if (status === 200) {
        sessionStorage.setItem(
          'userDetails',
          JSON.stringify({ username: res.body.username })
        );
        this.router.navigateByUrl('/home');
      }
    });
  }
}
