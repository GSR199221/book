import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class DataSharingService {

  constructor() { }

  private mainTimer = new Subject<any>();
  public mainTimer$ = this.mainTimer.asObservable();

  private displayData = new Subject<any>();
  public displayData$ = this.displayData.asObservable();

  private controllerData = new Subject<any>();
  public controllerData$ = this.controllerData.asObservable();

  SetControllerData(data: any): void {
    this.controllerData.next(data);
  }
  SetDisplayData(data): void {
    this.displayData.next(data);
  }
  setMainTimerData(data: any): void {
    this.mainTimer.next(data);
  }
}
