import { bindable, customElement } from 'aurelia-framework';
import '../../assets/style/gladiator-banner.css';
import { Banner, Gladiator } from '../../model';
import './gladiatorThumbnail.css';

@customElement('gladiator-thumbnail')
export class GladiatorThumbnailComponent {

    public readonly credits = Banner.credits;

    @bindable public gladiator: Gladiator;
}