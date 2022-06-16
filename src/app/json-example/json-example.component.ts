import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './shared/api.service';
import { EmployeeModel } from './shared/employee-model';

@Component({
  selector: 'app-json-example',
  templateUrl: './json-example.component.html',
  styleUrls: ['./json-example.component.scss']
})
export class JsonExampleComponent implements OnInit {

  formgroup!: FormGroup;
  empModelObj: EmployeeModel = new EmployeeModel();

  constructor(private formBuilder: FormBuilder,
    private _api: ApiService) { }

  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    this.getAllEmploye();

  }

  postEmploye() {
    this.empModelObj.firstName = this.formgroup.value.firstName;
    this.empModelObj.lastName = this.formgroup.value.lastName;
    this.empModelObj.email = this.formgroup.value.email;
    this.empModelObj.mobile = this.formgroup.value.mobile;
    this.empModelObj.salary = this.formgroup.value.salary;

    this._api.post(this.empModelObj).subscribe(res => {
      console.log(res);
      alert("employee detais added successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formgroup.reset();
      this.getAllEmploye();
    })
  }


  getAllEmployeData!: any;
  getAllEmploye() {
    this._api.get().subscribe(res => {
      this.getAllEmployeData = res;
    })
  }


  deleteEmploye(row: any) {
    this._api.delete(row.id).subscribe(res => {
      alert("employee deleted");
      this.getAllEmploye();
    })
  }


  onEdit(row: any) {
    this.empModelObj.id = row.id;
    this.formgroup.controls['firstName'].setValue(row.firstName)
    this.formgroup.controls['lastName'].setValue(row.lastName)
    this.formgroup.controls['email'].setValue(row.email)
    this.formgroup.controls['mobile'].setValue(row.mobile)
    this.formgroup.controls['salary'].setValue(row.salary)

    console.log('clicked')
  }

  updateEmploye() {
    this.empModelObj.firstName = this.formgroup.value.firstName;
    this.empModelObj.lastName = this.formgroup.value.lastName;
    this.empModelObj.email = this.formgroup.value.email;
    this.empModelObj.mobile = this.formgroup.value.mobile;
    this.empModelObj.salary = this.formgroup.value.salary;

    this._api.update(this.empModelObj, this.empModelObj.id)
      .subscribe(res => {
        alert("updated succesfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formgroup.reset();
        this.getAllEmploye();
      })
  }
}
