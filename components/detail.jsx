var React = require('react');
var ReactDOM = require('reactDOM');

var Detail = React.createClass({
  _handlechange: function () {
    this.setstate
  }
  
	render: function () {
		return (
			<div class="detail">
        <img src={this.post.url}/>
        <ul>
          <li><strong>Title:</strong> {this.props.title}</li>
          <li><strong>Description:</strong> {this.props.description}</li>
          <li><a href={'/post/' + this.props.objectId + '/edit'}>Edit</a></li>
        </ul>
    </div>
		)
	}
});




module.exports = Detail;
ReactDOM