import { Component, Input } from '@angular/core';
import '../../assets/style/gladiator-banner.css';
import { Banner, Gladiator } from '../../model';
import './gladiatorProfile.component.css';

@Component({
    selector: 'gladiator-profile',    
    templateUrl: './gladiatorProfile.component.html'
})
export class GladiatorProfileComponent {
    public readonly credits = Banner.credits;

    @Input() public isSmall = false;
    @Input() public gladiator: Gladiator;
}