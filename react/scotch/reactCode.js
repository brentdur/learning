'use strict';
// ReactDOM.render(
// 	<h1>Hello, world!</h1>,
// 	document.getElementById('mount-point')
// );
// 
var MyComponent = React.createClass({
	render: function() {
		return (
			<h1>Hello, {this.props.name}! {this.props.children}</h1>
		);
	}
})
 
var Counter = React.createClass({
	incrementCount: function() {
		this.setState({
			count: this.state.count + 1
		});
	},
	getInitialState: function() {
		return {
			count: 0
		}
	},
	render: function() {
		return (
			<div class="my-component">
				<h4>Number is {this.state.count}!</h4>
				<button type="button" onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
})

var List = React.createClass({
	render: function() {
		return (
			<ul>
			{
				this.props.items.map(function(item) {
					return <li key={item}>{item}</li>
				})
			}
			</ul>
		);
	}
});

var FilteredList = React.createClass({
	filterList: function(event) {
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item){
			return item.toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items:updatedList})
	},
	getInitialState: function() {
		return {
			initialItems: [
				"Apples",
				"Broccoli",
				"Chicken",
				"Duck"
			],
			items: []
		}
	},
	componentWillMount: function() {
		this.setState({items:this.state.initialItems})
	},
	render:function() {
		return (
			<div className="filter-list">
				<input type="text" placeholder="Search" onChange={this.filterList}/>
				<List items = {this.state.items} />
			</div>
		);
	}
});


// ReactDOM.render(
// 	<MyComponent name="handsome"><Counter /></MyComponent>,
// 	document.getElementById('mount-point')
// );

ReactDOM.render(
	<FilteredList />,
	document.getElementById('mount-point')
);


// ReactDOM.render(
// 	React.createElement('h1', null, 'Hello!');
// 	document.getElementById('mount-point')
// );