import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any = []
  isActive = 0
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.menuItems = [
      { menu: 'Floating Text', path: 'floating-text' },
      { menu: 'Products Category', path: 'products' },
      { menu: 'Countdown Timer By I/O', path: 'timer' },
      { menu: 'Countdown Timer By Subject', path: 'countdowntimer-with-subject' },
      { menu: 'Student Marks Table', path: 'student-marks' },
      { menu: "Dynamic Div's", path: 'dynamic-divs' }
    ]
    this.onLoadActive()
  }
  navigate(i: number, path: string) {
    this.isActive = i;
    this._router.navigate([path])
  }

  onLoadActive() {
    var url = '';
    this._router.events.subscribe(value => {
      url = this._router.url.toString()
      this.menuItems.forEach((e, i) => {
        if (url.includes('/' + e.path)) {
          this.isActive = i;
        }
      });
    });
  }
}
