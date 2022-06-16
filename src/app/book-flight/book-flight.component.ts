import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder, private activaedRoute:ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.activaedRoute.params.subscribe(res=>{
      console.log(res)
    })
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
