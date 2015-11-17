var React = require('react');


var Add = React.createClass({
 render: function() {
	 return (
		 <form id="detailForm">
		   <div className="form-group">
		     <label for="title">Title</label>
		     <input type="text" class="form-control" id="title" placeholder="Title" value="this.props"{{/title}}>
		   </div>
		   <div class="form-group">
		     <label for="url">Image URL</label>
		     <input type="text" class="form-control" id="url" placeholder="Image URL"{{#url}} value="{{url}}"{{/url}}>
		   </div>
		   <div class="form-group">
		     <label for="description">Description</label>
		     <textarea id="description" class="form-control" rows="3" placeholder="Description">{{#description}}{{description}}{{/description}}</textarea>
		   </div>
		   <button class="btn btn-default" type="submit">Submit</button>
		 </form>
	 )
 }
})
