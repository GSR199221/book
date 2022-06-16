import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,SidebarComponent,FooterComponent
  ]
})
export class SharedModule { }
