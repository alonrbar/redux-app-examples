import { Component, Input } from '@angular/core';
import '../../img/gladiator-badge.css';
import { Gladiator } from '../../model';
import credits from './imageCredits';

@Component({
    selector: 'gladiator-profile',
    templateUrl: './gladiatorProfile.component.html'
})
export class GladiatorProfileComponent {
    public readonly credits = credits;

    @Input() public gladiator: Gladiator;
}