var React = require('react');



var Main = React.createClass({
	render: function (){
		return (
			<ul id="main">
				{this.props.data.map(function(post){
					return (<li key={post.objectId}><a href={'/detail/' + post.objectId}><img src={post.url} /></a></li>)
				})}
			</ul>
		)
	}
});

module.exports = Main;
