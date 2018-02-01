import { bindable, customElement } from 'aurelia-framework';
import '../../assets/style/gladiator-banner.css';
import { Banner, Gladiator } from '../../model';
import './gladiatorProfile.css';

@customElement('gladiator-profile')
export class GladiatorProfileComponent {
    public readonly credits = Banner.credits;

    @bindable public isSmall = false;
    @bindable public gladiator: Gladiator;
}