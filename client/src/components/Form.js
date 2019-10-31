import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { isAuthenticated } = this.props.auth;

		const guestLinks = (
			<div>
				<div className="jumbotron">
					<p><h3>Discover weather in cities around the world.</h3></p>
				</div>
				<form onSubmit={e => this.props.getWeather(e)}>
					<input id="city-form" type="text" className="form-control-lg" name="city" placeholder="Enter city name..." style={{ marginTop: '20px' }}></input>
					<button className="btn-lg btn-primary" style={{ marginLeft: '15px' }}>Search</button>
				</form>
			</div>
		)

		const authLinks = (
			<form onSubmit={e => this.props.getWeather(e)}>
				<input id="city-form" type="text" className="form-control-lg" name="city" placeholder="Enter city name..." style={{ marginTop: '20px' }}></input>
				<button className="btn-lg btn-primary" style={{ marginLeft: '15px' }}>Search</button>
			</form>
		)

		return (
			<div>
				{isAuthenticated ? authLinks : guestLinks}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Form));