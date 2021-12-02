import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, TopbarComponent]
})
export class PagesModule { }
