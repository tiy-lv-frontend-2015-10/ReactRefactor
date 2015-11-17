var React = require('react');

var Detail = React.createClass({
	render:function() {
		
			
		
			return( 
				{this.props.data.map(function(test){

					return (
					<div className="detail">
					<img src={test.url} />

  					<ul>
			    		<li><strong>Title:</strong>{test.title}</li>
			    		<li><strong>Description:</strong>{test.description}</li>
			    		<li><a href={'/detail/'+test.objectId}>Edit</a></li>
		  			</ul>
		  			</div>
		  			)
		  		)
				
				}
				
			})};
		


	
});

module.exports = Detail;


