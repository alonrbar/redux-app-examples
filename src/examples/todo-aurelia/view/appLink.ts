import { bindable } from 'aurelia-framework';
export class Link {
    @bindable public active: boolean;
    @bindable public onClick: () => void;
}