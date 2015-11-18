var React = require('react');

var Edit = React.createClass({
	getDefaultProps:function(){
		return{
			data: {
				objectId: '',
				url: '',
				title: '',
				description: ''
			}
		}
	},
	render:function(){
		return(
	<form id="detailForm">
		<input id="objectId" type="hidden" defaultValue={this.props.data.objectId} />
		<div className="form-group">
		<label htmlFor="title">Title</label>
		<input type="text" className="form-control" id="title" placeholder="Title" defaultValue={this.props.data.title} />
		</div>
		<div className="form-group">
		<label htmlFor="url">Image URL</label>
		<input type="text" className="form-control" id="url" placeholder="Image URL" defaultValue={this.props.data.url} />
		</div>
		<div className="form-group">
		<label htmlFor="description">Description</label>
		<textarea id="description" className="form-control" rows="3" placeholder="Description">{this.props.data.description}</textarea>
		</div>
		<button className="btn btn-default" type="submit">Submit</button>
	</form>
	)
	}
});

module.exports =Edit;