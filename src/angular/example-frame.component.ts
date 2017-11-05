import { Component, Input } from '@angular/core';

@Component({
    selector: 'example-frame',
    templateUrl: './example-frame.component.html'
  })
export class ExampleFrameComponent {
    @Input() public title: string;
    @Input() public subtitle: string;
}