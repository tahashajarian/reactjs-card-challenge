import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from './redux/actions/cards-action';
import { bindActionCreators } from 'redux';
import TheCard from './components/card';

class App extends Component {
	constructor() {
		super();
		this.state = {randomIndex: 0}
	}

	componentDidMount() {
		this.props.getCards();
	}
	changeRandomIndex = () => {
		const randomIndex = Math.floor(Math.random() * (this.props.cards.allCards.length-1)) 
		this.setState({
			randomIndex
		})
	}

	render() {
		console.log(this.props)
		return (
			<div className="App">
				<header className="App-header">
					<h1>
						card app
         	 		</h1>
				</header>
				<div className="body">
					{
						this.props.cards.allCards &&
						<TheCard 
							card={this.props.cards.allCards[this.state.randomIndex]}
						/>
					}
				</div>
				<div className="button">
					<button onClick={this.changeRandomIndex}>Try</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cards: state.cards
})

const mapDispatchToProps = (dispatch, props) => {
	return bindActionCreators({
		getCards
	}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
