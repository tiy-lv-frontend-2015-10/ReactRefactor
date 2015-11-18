var React = require('react');

var Detail = React.createClass({
	_click: function(e) {
		e.preventDefault();
  		var href = $(this).attr('href').substr(1);
  		this.props.router.navigate(href, {trigger:true});
	},
	render:function() {
		return (
			<div className="detail">
				<img onClick={this._click} src={this.props.data.url} />
				<ul>
					<li><strong>Title:</strong>{this.props.data.title}</li>
					<li><strong>Description:</strong>{this.props.data.description}</li>
					<li><a href={'/detail/'+this.props.data.objectId +'/edit'}>Edit</a></li>
				</ul>
			</div>
		)
	}
});

module.exports = Detail;


