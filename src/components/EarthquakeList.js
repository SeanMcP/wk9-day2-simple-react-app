import React, { Component } from 'react';
import moment from 'moment';

import earthquakes from '../data/earthquakes.js';

export default class EarthquakeList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let earthquakesArr = earthquakes.features.map((earthquake) => {
      return (
        <article>
          <div key={earthquake.properties.ids}>
            <h1>Where: {earthquake.properties.place}</h1>
            <p>Magnitude: {earthquake.properties.mag}</p>
          </div>
          <div className="col-sm-6" key={earthquake.properties.ids}>
            <div className="card" >
              <div className="card-block">
                <h4 className="card-title">{earthquake.properties.place}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.properties.time).format('llll')}</h6>
                <p className="card-text">Coordinates: {earthquake.geometry.Coordinates}</p>

                <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>

              </div>
            </div>
          </div>
        </article>
      )
    })
    return (
      <div>
        {earthquakesArr}
      </div>
    )
  }
}
