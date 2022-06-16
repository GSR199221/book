import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.inItForm()
  }

  inItForm() {
    this.form = this.fb.group({
      username: [''],
      userEmail: [''],
      password: [''],
      phone: [''],
      gender: ['']

    })
  }


  register() {
    if (this.form.valid) {
      sessionStorage.setItem('data', JSON.stringify(this.form.value));
      this._router.navigate(['login'])
    }
  }
}
