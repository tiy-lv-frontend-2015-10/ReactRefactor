var React = require('react');
var ReactDOM = require('react-dom');
/*require('./components/.jsx')*/
//var Main = React.createClass({
//	render: function() {
//	return (
//		<ul id="main">
//			{this.props.data.map(function(post){
//			return <Sub objectId={post.objectId} url={post.url} /> 
//			})}
//		</ul>
//	);
//	}
//});


//<ul id="main">
//  {{#data}}
//  <li><a href="/detail/{{objectId}}"><img src="{{url}}" /></a>
 // {{/data}}
//</ul> -->




var Sub = React.createClass({
	render: function () {
	return (
		<li><a href={'/detail/' + this.props.objectId}><img src = {this.props.url} /></a></li>
	);
	}
});

ReactDOM.render(<Sub />{}).getElementById('container');