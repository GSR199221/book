import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.inItForm()
  }

  inItForm() {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }


  login() {
    let userdata = JSON.parse(sessionStorage.getItem('data'))

    console.log(sessionStorage.getItem('data'))

    if (userdata.username === this.form.value.username && userdata.password === this.form.value.password) {
      this._router.navigate(['userbooking'])
    }
    else {
      alert('Invalid details')
    }
  }
}
