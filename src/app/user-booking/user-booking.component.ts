import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../json-example/shared/api.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent implements OnInit {
  fromList = [
    'Hyderabad', 'Benguluru', 'Chennai', 'Vizag'
  ]
  toList = [
    'Benguluru',
    'Hyderabad',
    'Vizag',
    'Chennai'
  ]
  isActive: any
  flightList: any[] = []
  form: FormGroup;
  selectedFlight: any = {}
  userform: FormGroup;
  bookedFlghtsList: any[] = []
  @ViewChild('one') one: ElementRef<HTMLElement>;
  @ViewChild('two') two: ElementRef<HTMLElement>;
  @ViewChild('three') three: ElementRef<HTMLElement>;
  flightBookHistory: any;
  isSelectedFlight = false


  constructor(private fb: FormBuilder,
    private _api: ApiService, private _router: Router) { }

  ngOnInit(): void {
    this.inItForm();
    this.userInit()
  }

  clickone() {
    let el: HTMLElement = this.one.nativeElement;
    el.click();
  }
  clicktwo() {
    let el: HTMLElement = this.two.nativeElement;
    el.click();
    setTimeout(() => {
      this._api.getBookings().subscribe(res => {
        console.log(res, 'dfdfdfdfd')
        this.bookedFlghtsList = res
      })
    }, 1000);
  }
  clickthree() {
    let el: HTMLElement = this.three.nativeElement;
    el.click();
  }
  inItForm() {
    this.form = this.fb.group({
      from: [''],
      to: [''],
      date: [''],
      returnDate: [''],

    })
  }
  userInit() {
    this.userform = this.fb.group({
      adults: this.fb.array([])
    })
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }
  employees(): FormArray {
    return this.userform.get("adults") as FormArray
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      personName: [''],
      gender: [''],
      age: [''],
      menuType: ''
    })
  }

  search() {
    this._api.getFlights().subscribe(res => {
      this.flightList = res.filter(ele => {
        ele.bookedDate = this.form.value.date
        return ele.from == this.form.value.from && ele.to == this.form.value.to
      })
    })
  }

  onSelectFlight(i, row) {
    this.isActive = i
    this.selectedFlight = row
    this.isSelectedFlight = true
    this.addEmployee()

  }

  countinueBooking() {
    const paylod = {
      ...this.selectedFlight,
      ... this.userform.value,
      pending: true
    }
    this._api.postBookFlight(paylod).subscribe(res => {
      alert('Seccuss booking')
    })
    this.clicktwo()
  }

  bookingHstory(row) {
    this.clickthree()
    this.flightBookHistory = row
  }

  cancelFlight(row) {
    this._api.deleteBookings(row.id).subscribe(res => {
      this._api.getBookings().subscribe(res => {
        this.bookedFlghtsList = res
      })
    })
  }
}
