import { Component, Input } from '@angular/core';
import '../../img/gladiator-badge.css';
import { Badge, Gladiator } from '../../model';

@Component({
    selector: 'gladiator-profile',
    templateUrl: './gladiatorProfile.component.html'
})
export class GladiatorProfileComponent {
    public readonly credits = Badge.credits;

    @Input() public gladiator: Gladiator;
}