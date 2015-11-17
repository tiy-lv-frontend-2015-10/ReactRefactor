var React = require('react');

var Detail = React.createClass({
	render:function(){
		return (
			<div class="detail">
				return(
			  <img src={detail.url} />
			  <ul>
			    <li><strong>Title:</strong> {detail.title}</li>
			    <li><strong>Description:</strong> {detail.description}</li>
			    <li><a href={"/detail/" + post.objectId + "/edit"}>Edit</a></li>
			  </ul>
			  )
			})}
			</div>
		);
	}
});

module.exports =Detail;