import React, { Component } from 'react';
import * as moment from 'moment';
import Titles from './Components/Titles/Titles';
import Form from './Components/Form/Form';
import Weather from './Components/Weather/Weather';
import './App.css';
import { Paper } from 'material-ui';

const API_KEY = "848b664e5348827dd1ff074da41a267f"; //"1d4ba42308c336a75dbbbbe8a3674a5f"; 

class App extends Component {
  state = {
    weather : null,
    loaded : false,
    error : false
  }
  getWeather = async (e) => {

    e.preventDefault()
    const city = e.target.elements.city.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    if (city && city !== 'undefined' && data.cod == 200) {
      this.setState({
        weather : data.list,
        loaded : true,
        error : false,
        city : data.city.name + "(" + data.city.country + ")"
      })
    } else {
      this.setState({
        weather : null,
        loaded : false,
        error: true,
      })
    }
  }

  render() {
    let weatherComp = [];
    if(this.state.loaded && !this.state.error){
      var weatherData = this.state.weather;
      var final = [];
      var newData = weatherData.filter( (day) => {
        var ApiDate = moment(day.dt * 1000).format("ddd");
				if (final.length > 4) {
					return false;
        } else 
        if (final.indexOf(ApiDate) > -1){
					return false;
				} else {
					final.push(ApiDate);
					return true;
				};
      });

      newData.map( (item) => { weatherComp.push(<Weather key={item.main.temp} weather={item} />); })
    }
    return (
      <section className="App">
        <Titles />
        <section className="weather-card__grid">
          <Form getWeather={this.getWeather}/>
          {(this.state.loaded )? <Paper><h1>Five Days Weather in {this.state.city }</h1></Paper> : "" }
          {weatherComp}
        </section>
          {this.state.error ? <h1 className="error">Please enter valid city name</h1> : ""}
      </section>
    );
  }
}

export default App;
