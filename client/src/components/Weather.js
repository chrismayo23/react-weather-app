import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import picture from '../globe.png';
// import request from "superagent"


class Weather extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { isAuthenticated } = this.props.auth;

		// function saveLocation(e) {
		// 	e.preventDefault();
		// 	console.log('The link was clicked.');
		// 	request
		// 		.get(``)
		// 		.then(res => {
		// 		}
		//   }


		const guestLinks = (
			<div>
				{
					this.props.city &&
					<div className="card weather__info" style={{ marginTop: '25px' }}>
						<div style={{ margin: '15px' }}>
							{
								this.props.icon && <p className="weather__key"><img id="wicon" src={this.newMethod() + this.props.icon + '.png'} alt="Weather icon"></img></p>
							}
							{
								this.props.city && this.props.country && <p className="weather__key"><span className="weather__value"> {this.props.city}, {this.props.country}</span></p>
							}
							{
								this.props.temperature && <p className="weather__key"> Temperature:<span className="weather__value"> {this.props.temperature}ºF</span></p>
							}
							{
								this.props.humidity && <p className="weather__key"> Humidity:<span className="weather__value"> {this.props.humidity}%</span></p>
							}
							{/* {
								this.props.windSpeed && this.props.windDirection && <p className="weather__key"> Wind:<span className="weather__value"> {this.props.windSpeed} mph</span></p>
							} */}
							{
								this.props.description && <p className="weather__key"> Conditions:<span className="weather__value"> {this.props.description}</span></p>
							}
							{
								this.props.error && <p className="weather__error"> {this.props.error}</p>
							}
						</div>
					</div>
				}
				<hr></hr>
			</div>
		)

		const authLinks = (
			<div>
				{
					this.props.city &&
					<div className="card weather__info" style={{ marginTop: '25px' }}>
						<div style={{ margin: '15px' }}>
							{
								this.props.icon && <p className="weather__key"><img id="wicon" src={'https://openweathermap.org/img/w/' + this.props.icon + '.png'} alt="Weather icon"></img></p>
							}
							{
								this.props.city && this.props.country && <p className="weather__key"><span className="weather__value"> {this.props.city}, {this.props.country}</span></p>
							}
							{
								this.props.temperature && <p className="weather__key"> Temperature:<span className="weather__value"> {this.props.temperature}ºF</span></p>
							}
							{
								this.props.humidity && <p className="weather__key"> Humidity:<span className="weather__value"> {this.props.humidity}%</span></p>
							}
							{/* {
								this.props.windSpeed && this.props.windDirection && <p className="weather__key"> Wind:<span className="weather__value"> {this.props.windSpeed} mph</span></p>
							} */}
							{
								this.props.description && <p className="weather__key"> Conditions:<span className="weather__value"> {this.props.description}</span></p>
							}
							{
								this.props.error && <p className="weather__error"> {this.props.error}</p>
							}
						</div>
					</div>
				}
				<hr></hr>
			</div>
		)

		return (
			<div>
				{isAuthenticated ? authLinks : guestLinks}
			</div>
		);
	}

	newMethod() {
		return 'https://openweathermap.org/img/w/';
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Weather));