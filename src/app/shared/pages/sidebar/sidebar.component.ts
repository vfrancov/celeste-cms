import { Component, OnInit } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  environment: string = environment.type;

  constructor() { }

  ngOnInit(): void {
  }

}
