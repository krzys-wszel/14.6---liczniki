var Counter = React.createClass({
	
	getInitialState: function(){
		return {
		
			counter: 0
		};
		
	},
	
	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	getDefaultProps: function(){
		console.log('Ustawienie domyślnych propsów.');
	},
	
	componentWillMount: function() {
		console.log('Możemy wykonać różne operacje, oparte na propsach w stanie przed renderowaniem');
	},
	
	componentDidMount: function() {
		console.log('DOM jest załadowany, można wykonać na nim różne operacje');
	},
	
	componentWillReceiveProps: function(){
		console.log('W momencie pojawienia się nowych propsów możemy wykonać różne operacje');
	},
	
	shouldComponentUpdate: function(){
		console.log('Możeby zmienić na false, jeśli nie chcemy, żeby aplikacja wywołała zmiany spowodowane przez zminę propsów ');
		return true;
	},
	
	componentWillUpdate: function(){
		console.log('Podobnie jak componentWIllMount, możemy operować na DOM');
	},
	
	componentWillUnmount: function(){
		console.log('możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM.');
	},
	
	
	render: function(){
		return (
				React.createElement('div', {className: 'counter'},
					React.createElement('h2', {}, 'Licznik'),
					React.createElement('span', {}, 'Wynik: ' + this.state.counter),
					React.createElement('div', {}, 
						React.createElement('button', {
							className: 'button_plus', 
							onClick: this.increment},'Zwiększ wynik'),
							
						React.createElement('button', { className: 'button_minus',
							onClick: this.decrement}, 'Zmniejsz wynik')
					)
				)
		);
	}
});

var element = React.createElement('div', {},
		React.createElement(Counter),
		React.createElement(Counter),
        React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));