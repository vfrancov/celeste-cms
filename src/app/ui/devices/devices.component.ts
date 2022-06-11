import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html'
})
export class DevicesPageComponent implements OnInit {

  ngOnInit(): void {
    console.log('My Devices!');
  }
}
