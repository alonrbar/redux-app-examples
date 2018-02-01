import * as React from 'react';
import { connect } from 'redux-app';
import { autoSync } from '../../autoSync';
import { GladiatorPageState } from '../state';
import { GladiatorProfile } from './gladiatorProfile';
var debounce = require('lodash.debounce');

@autoSync(GladiatorPageState)
export class GladiatorPage extends React.Component {

  public nameChanged = debounce((name: string) => {
    this.vm.setName(name);
  }, 300);

  @connect
  public vm: GladiatorPageState;

  public componentWillMount() {
    this.vm.reset();
  }

  public render() {
    return (
      <div className="page">

        {/* back button */}
        <a href="javascript:void(0)" onClick={() => this.vm.goBack()} className="float-right">Back</a>

        <div className="row">

          {/* profile preview */}
          <div className="col-12 col-xl-3" style={{ minWidth: '20em' }}>
            <GladiatorProfile gladiator={this.vm.tempGladiator.value}></GladiatorProfile>
          </div>

          {/* edit controls */}
          <div className="col-12 col-xl-8">
            <form className="mt-5">

              {/* name */}
              <div className="form-group">
                <label htmlFor="gladiatorName">Gladiator Name</label>
                <input type="text" value={this.vm.tempGladiator.value.name} onChange={e => this.nameChanged(e.target.value)} className="form-control" name="gladiatorName"
                  placeholder="Enter name" />
              </div>

              {/* banner */}
              <div className="form-row">
                <label className="col-3 col-form-label">Banner:</label>
                <div className="btn-group col-9">
                  <button className="btn btn-secondary" onClick={() => this.vm.prevBanner()}>&lt; Prev</button>
                  <button className="btn btn-secondary" onClick={() => this.vm.nextBanner()}>Next &gt;</button>
                </div>
              </div>

              <br />

              {/* control buttons */}
              <div className="form-row">
                <button className="btn btn-success m-1" onClick={() => this.vm.save()}>Save</button>
                <button className="btn btn-light m-1" onClick={() => this.vm.reset()}>Cancel</button>
                <button className="btn btn-danger m-1" onClick={() => this.vm.delete()}>Delete</button>
              </div>

              <br />
              <br />

              {/* saved message */}
              <div className={"alert alert-success alert-dismissible fade" + (this.vm.showStatus ? 'show' : '')}>
                Gladiator Saved
                      <button className="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
