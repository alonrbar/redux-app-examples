import * as React from 'react';
import { connect } from 'redux-app';
import { autoSync } from '../../autoSync';
import { GladiatorPageState } from '../state';
import { GladiatorProfile } from './GladiatorProfile';
var debounce = require('lodash.debounce');

class GladiatorPage extends React.Component<GladiatorPageState> {

  public nameChanged = debounce((name: string) => {
    this.props.setName(name);
  }, 300);

  public componentWillMount() {
    this.props.reset();
  }

  public render() {
    return (
      <div className="page">

        {/* back button */}
        <a href="javascript:void(0)" onClick={() => this.props.goBack()} className="float-right">Back</a>

        <div className="row">

          {/* profile preview */}
          <div className="col-12 col-xl-3" style={{ minWidth: '20em' }}>
            <GladiatorProfile gladiator={this.props.tempGladiator}></GladiatorProfile>
          </div>

          {/* edit controls */}
          <div className="col-12 col-xl-8">
            <div className="mt-5">

              {/* name */}
              <div className="form-group">
                <label>Gladiator Name</label>
                <input type="text" value={(this.props.tempGladiator && this.props.tempGladiator.name) || ''} onChange={e => this.nameChanged(e.target.value)} className="form-control" placeholder="Enter name" />
              </div>

              {/* banner */}
              <div className="form-row">
                <label className="col-3 col-form-label">Banner:</label>
                <div className="btn-group col-9">
                  <button className="btn btn-secondary" onClick={() => this.props.prevBanner()}>&lt; Prev</button>
                  <button className="btn btn-secondary" onClick={() => this.props.nextBanner()}>Next &gt;</button>
                </div>
              </div>

              <br />

              {/* control buttons */}
              <div className="form-row">
                <button className="btn btn-success m-1" onClick={() => this.props.save()}>Save</button>
                <button className="btn btn-light m-1" onClick={() => this.props.reset()}>Cancel</button>
                <button className="btn btn-danger m-1" onClick={() => this.props.delete()}>Delete</button>
              </div>

              <br />
              <br />

              {/* saved message */}
              <div className={"alert alert-success alert-dismissible fade" + (this.props.showStatus ? 'show' : '')}>
                Gladiator Saved
                      <button className="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const connected = autoSync(GladiatorPageState)(GladiatorPage);
export { connected as GladiatorPage };
