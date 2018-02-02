import * as React from 'react';
import '../assets/style/gladiator-banner.css';
import { Banner, Gladiator } from '../model';
import './gladiatorProfile.css';

export interface GladiatorProfileProps {
    gladiator: Gladiator;
}

export const GladiatorProfile: React.SFC<GladiatorProfileProps> = (props) => {
    if (props.gladiator) {
        return (
            <div className="card gladiator-profile">

                {/* banner */}
                <img className={"card-img-top bg-light pt-4 gladiator-badge " + props.gladiator.banner} />

                <div className="card-body">
                    <span className="badge badge-info" title={Banner.credits}>?</span>

                    {/* <!-- name --> */}
                    <h4 className="card-title mt-1">{props.gladiator.name}</h4>

                    {/* <!-- wins --> */}
                    <p className="card-text">
                        Wins: {props.gladiator.wins}
                    </p>
                </div>
            </div>
        );
    } else {

        // empty gladiator profile
        return (
            <div className="card gladiator-profile">
                <img className="card-img-top bg-light pt-4 gladiator-badge banner_empty" />
                <div className="card-body">
                    <span className="badge badge-info" title="Image created by Fantastic from the Noun Project">?</span>
                    <p className="card-text mt-1">
                        <i>No Gladiator</i>
                    </p>
                </div>
            </div >
        );
    }
}