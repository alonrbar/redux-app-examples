import { customElement } from 'aurelia-framework';
import * as React from 'react';
import { connect } from 'redux-app';
import { MainPageState } from '../state';
import './mainPage.css';
import { GladiatorThumbnail } from './gladiatorThumbnail';

@customElement('main-page')
export class MainPage extends React.Component {

    @connect
    public st: MainPageState;

    public render() {
        return (
            <div className="row">

                {/* top fighters list */}
                {this.st.topGladiators.length > 0 &&
                    <div className="col-2 text-center" style={{ overflow: 'hidden' }}>
                        <h5>Top Fighters</h5>
                        <div className="list-group">
                            {this.st.topGladiators.map(gladiator =>
                                <GladiatorThumbnail key={gladiator.id} gladiator={gladiator} onClick={() => this.st.goToGladiatorPage(gladiator)} className="m-2">
                                </GladiatorThumbnail>
                            )}
                        </div>
                    </div>}
                {!this.st.topGladiators.length && <div className="col-2"></div>}

                <div className="col-10 page">

                    {/* buttons */}
                    <div className="row mb-2" style={{ height: '8%' }}>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-info" onClick={() => this.st.newGladiator()}>New Gladiator</button>
                        </div>
                    </div>
                    <div className="row" style={{ height: '8%' }}>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-info" onClick={() => this.st.generateGladiators()}>Generate 5 Gladiators</button>
                        </div>
                    </div>

                    {/* enter the arena */}
                    <div className="row" style={{ height: '64%' }}>
                        <img src={require("../assets/img/coliseum.png")} className="coliseum" onClick={() => this.st.toTheArena()} title="Enter the arena" />
                    </div>

                    {/* all gladiators list */}
                    <div className="row" style={{ height: '20%' }}>
                        <div className="gladiators-list-container">
                            <ul className="list-inline gladiators-list mb-0">
                                {this.st.gladiatorsList.items.map(gladiator =>
                                    <li key={gladiator.id} className="list-inline-item" onClick={() => this.st.goToGladiatorPage(gladiator)}>{gladiator.name}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
