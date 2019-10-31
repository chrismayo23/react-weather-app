import React from "react";

const Weather = props => {
	function myFunction() {
	}

	return (
		<div className="card weather__info">
			{
				props.icon && <p className="weather__key"><img id="wicon" src={'https://openweathermap.org/img/w/' + props.icon + '.png'} alt="Weather icon"></img></p>
			}
			{
				props.city && props.country && <p className="weather__key"><span className="weather__value"> {props.city}, {props.country}</span></p>
			}
			{
				props.lat && <p className="weather__key"> Latitude:<span className="weather__value"> {props.lat}</span></p>
			}
			{
				props.lon && <p className="weather__key"> Longitude:<span className="weather__value"> {props.lon}</span></p>
			}
			{
				props.temperature && <p className="weather__key"> Temperature:<span className="weather__value"> {props.temperature}º F</span></p>
			}
			{
				props.humidity && <p className="weather__key"> Humidity:<span className="weather__value"> {props.humidity}%</span></p>
			}
			{/* {
				props.windSpeed && props.windDirection && <p className="weather__key"> Wind:<span className="weather__value"> {props.windSpeed} mph</span></p>
			} */}
			{
				props.description && <p className="weather__key"> Conditions:<span className="weather__value"> {props.description}</span></p>
			}
			{
				props.error && <p className="weather__error"> {props.error}</p>
			}
		</div>
	);
}

export default Weather;