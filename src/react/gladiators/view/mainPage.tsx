import * as React from 'react';
import { autoSync } from '../../autoSync';
import { MainPageState } from '../state';
import { GladiatorThumbnail } from './GladiatorThumbnail';
import './mainPage.css';

const MainPage: React.SFC<MainPageState> = (props) => (
    <div className="row">

        {/* top fighters list */}
        {props.topGladiators.length > 0 &&
            <div className="col-2 text-center" style={{ overflow: 'hidden' }}>
                <h5>Top Fighters</h5>
                <div className="list-group">
                    {props.topGladiators.map(gladiator =>
                        <div key={gladiator.id} className="m-2">
                            <GladiatorThumbnail gladiator={gladiator} onClick={() => props.goToGladiatorPage(gladiator)}>
                            </GladiatorThumbnail>
                        </div>
                    )}
                </div>
            </div>}
        {!props.topGladiators.length && <div className="col-2"></div>}

        <div className="col-10 page">

            {/* buttons */}
            <div className="row mb-2" style={{ height: '8%' }}>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-info" onClick={() => props.newGladiator()}>New Gladiator</button>
                </div>
            </div>
            <div className="row" style={{ height: '8%' }}>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-info" onClick={() => props.generateGladiators()}>Generate 5 Gladiators</button>
                </div>
            </div>

            {/* enter the arena */}
            <div className="row" style={{ height: '64%' }}>
                <img src={require("../assets/img/coliseum.png")} className="coliseum" onClick={() => props.toTheArena()} title="Enter the arena" />
            </div>

            {/* all gladiators list */}
            <div className="row" style={{ height: '20%' }}>
                <div className="gladiators-list-container">
                    <ul className="list-inline gladiators-list mb-0">
                        {props.gladiatorsList.items.map(gladiator =>
                            <li key={gladiator.id} className="list-inline-item" onClick={() => props.goToGladiatorPage(gladiator)}>{gladiator.name}</li>)
                        }
                    </ul>
                </div>
            </div>

        </div>
    </div>
);

const connected = autoSync(MainPageState)(MainPage);
export { connected as MainPage };