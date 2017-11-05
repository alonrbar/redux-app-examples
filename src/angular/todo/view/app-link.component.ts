import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './app-link.component.html',
    styles: ['.app-link { display: inline; }']
})
export class AppLinkComponent {
    @Input() public text: string;
    @Input() public active: boolean;
}