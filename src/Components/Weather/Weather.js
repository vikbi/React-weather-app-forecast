import React from 'react';
import { Paper } from 'material-ui';
import * as moment from 'moment';
const Weather = (props) => {
  return (
    <Paper className="weather_tab">
        <div>
          { <p className="weather_data">Day : <span> {moment(props.weather.dt * 1000).format("dddd")}</span></p> }
          { <p className="weather_data">Temperature: <span>min: {props.weather.main.temp_min} C°</span><span> - max: {props.weather.main.temp_max} C°</span></p>}
          { <p className="weather_data">Humidity: <span> {props.weather.main.humidity} %</span></p>}
          { <p className="weather_data">Current Weather: <span> { props.weather.weather[0].description }</span></p>}
        </div>
    </Paper>
  )
}
export default Weather;
