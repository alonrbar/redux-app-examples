import * as React from 'react';
import '../assets/style/gladiator-banner.css';
import { Banner, Gladiator } from '../model';
import './gladiatorThumbnail.css';

export interface GladiatorThumbnailProps {
    gladiator: Gladiator;
    onClick: () => void;
}

export const GladiatorThumbnail: React.SFC<GladiatorThumbnailProps> = (props) => (

    <div className="card gladiator-thumbnail" title={props.gladiator.name} onClick={props.onClick}>

        {/*  banner */}
        <img className={"card-img bg-light gladiator-banner " + props.gladiator.banner} />

        <div className="card-img-overlay">
            <div className="card-bottom">

                {/* name */}
                <span className="float-left gladiator-name">{props.gladiator.name}</span>

                {/* wins */}
                <span className="float-right badge badge-warning">{props.gladiator.wins}</span>
            </div>
        </div>
    </div>
);