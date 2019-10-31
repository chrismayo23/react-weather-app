import React, { Component } from 'react';
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "cf14fc4870cdb36944829c65992820e8";

export default class Home extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        lat: undefined,
        lon: undefined,
        windSpeed: undefined,
        windDirection: undefined,
        icon: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const city = e.target.elements.city.value
        document.getElementById("city-form").value = ""
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        
        if (city) {
            this.setState({
                temperature: Math.round(data.main.temp),
                city: data.name,
                country: data.sys.country,
                humidity: Math.round(data.main.humidity),
                lat: data.coord.lat,
                lon: data.coord.lon,
                windSpeed: Math.round(data.wind.speed),
                windDirection: Math.round(data.wind.deg),
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                lat: undefined,
                lon: undefined,
                windSpeed: undefined,
                windDirection: undefined,
                icon: undefined,
                error: "Please enter the values."
            });
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            {/* <div className="row"> */}
                                {/* <div className="col-xs-7 form-container"> */}
                                    <Form getWeather={this.getWeather} />
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        lat={this.state.lat}
                                        lon={this.state.lon}
                                        description={this.state.description}
                                        windSpeed={this.state.windSpeed}
                                        windDirection={this.state.windDirection}
                                        icon={this.state.icon}
                                        error={this.state.error}
                                    />
                                {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
