import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, TopbarComponent]
})
export class PagesModule { }
