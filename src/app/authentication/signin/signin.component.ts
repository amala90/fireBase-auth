import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private FormBuilder: FormBuilder, private authService: AuthService,) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signInForm = this.FormBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]{6,}')]]
    });
  }

  get formsControls() { return this.signInForm.controls; }
  onSubmit() {
    this.authService.signIn(this.signInForm.value);
  }
  signInWithGoogle() {
    this.authService.SignInWithGoogle();
  }
}
