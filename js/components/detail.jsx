var React = require('react');

var Detail = React.createClass({
	render:function() {
		return(
		<div class="detail">
  		<img src="{{url}}" />
  		<ul>
		    <li><strong>Title:</strong> {{title}}</li>
		    <li><strong>Description:</strong> {{description}}</li>
		    <li><a href="/post/{{objectId}}/edit">Edit</a></li>
		  </ul>
		</div>


		)
	}
})