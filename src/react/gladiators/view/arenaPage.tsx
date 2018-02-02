import { connect } from 'redux-app';
import { ArenaPageState } from '../state';
import * as React from 'react';
import { autoSync } from '../../autoSync';
import { GladiatorProfile } from './GladiatorProfile';

class ArenaPage extends React.Component<ArenaPageState> {

    public componentDidMount() {
        this.props.prepareForFight();
    }

    public render() {
        return (
            <div className="page">

                {/* back button */}
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <a href="javascript:void(0)" onClick={() => this.props.goBack()}>Back</a>
                    </div>
                </div>
                <br />

                {/* the arena */}
                <div className="row justify-content-center">

                    {/* contender 1 */}
                    <div className="col-3">
                        <div className="row d-flex justify-content-center">
                            <GladiatorProfile gladiator={this.props.gladiator1}></GladiatorProfile>
                        </div>
                        <br />

                        {/* life */}
                        <div className="row">
                            <div className="progress w-100">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: this.props.lifeMeter1 + '%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* controls */}
                    <div className="col-3 align-self-center" style={{ height: '20em' }}>
                        <div className="row h-25">
                            <div className="col d-flex justify-content-center align-items-center">
                                {this.props.status}
                            </div>
                        </div>
                        <div className="row h-50">
                            <div className="col align-self-center d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={() => this.props.fight()}>Fight!!</button>
                            </div>
                        </div>
                        <div className="row h-25"></div>
                    </div>

                    {/* contender 2 */}
                    <div className="col-3">
                        <div className="row d-flex justify-content-center">
                            <GladiatorProfile gladiator={this.props.gladiator2}></GladiatorProfile>
                        </div>
                        <br />

                        {/* life */}
                        <div className="row">
                            <div className="progress w-100">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: this.props.lifeMeter2 + '%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const connected = autoSync(ArenaPageState)(ArenaPage);
export { connected as ArenaPage };