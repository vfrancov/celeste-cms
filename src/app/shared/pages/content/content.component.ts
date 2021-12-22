import { Component, Input } from "@angular/core";

@Component({
    selector: 'content-component',
    templateUrl: './content.component.html'
})
export class ContentComponent {
    @Input() title: string;
}