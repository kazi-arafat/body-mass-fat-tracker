import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BodyMetricApiService } from 'src/app/services/body-metric-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private bodyMetricApiService: BodyMetricApiService) {}

  ngOnInit(): void {}

  onSubmit(registerForm: NgForm) {
    console.log('Register form submitted!');
    console.log(registerForm.value);
    try {
      this.bodyMetricApiService
        .createAppUser(registerForm.value)
        .subscribe((res) => {
          console.log(res);
          registerForm.form.reset();
        });
    } catch (error) {
      console.log(error);
    }
  }
}
