import { bindable, customElement } from 'aurelia-framework';
import * as React from 'react';
import '../assets/style/gladiator-banner.css';
import { Banner, Gladiator } from '../model';
import './gladiatorThumbnail.css';

export interface GladiatorThumbnailProps {
    gladiator: Gladiator;
    onClick: () => void;
    className: any;
}

@customElement('gladiator-thumbnail')
export class GladiatorThumbnail extends React.Component<GladiatorThumbnailProps> {

    public render() {
        return (
            <div className="card gladiator-thumbnail" title={this.props.gladiator.name}>

                {/*  banner */}
                <img className={"card-img bg-light gladiator-banner " + this.props.gladiator.banner} />

                <div className="card-img-overlay">
                    <div className="card-bottom">

                        {/* name */}
                        <span className="float-left gladiator-name">{this.props.gladiator.name}</span>

                        {/* wins */}
                        <span className="float-right badge badge-warning">{this.props.gladiator.wins}</span>
                    </div>
                </div>
            </div>
        );
    }
}