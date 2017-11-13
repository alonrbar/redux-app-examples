import { Component, Input } from '@angular/core';
import '../../assets/gladiator-banner.css';
import { Banner, Gladiator } from '../../model';
import './gladiatorThumbnail.component.css';

@Component({
    selector: 'gladiator-thumbnail',    
    templateUrl: './gladiatorThumbnail.component.html'
})
export class GladiatorThumbnailComponent {

    public readonly credits = Banner.credits;

    @Input() public gladiator: Gladiator;
}