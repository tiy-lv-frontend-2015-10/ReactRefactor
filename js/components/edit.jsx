var React = require('react');


var Edit = React.createClass({
	getInitialState: function() {
			return {
			objectId: this.props.item.objectId,
			title: this.props.item.title,
			url: this.props.item.url,
			description: this.props.item.description
			}
		},
		handleTitleChange: function(e) {
				this.setState({title: e.target.value})
			},
		handleUrlChange: function(e) {
			this.setState({url: e.target.value})
			},
		handleDescriptionChange: function(e)	{
				this.setState({description: e.target.value})
			},

	render: function() {
		return (
			<form id="detailForm">
			  <input id="objectId" type="hidden" value={this.state.objectId} />
			  <div className="form-group">
			    <label htmlFor="title">Title</label>
			    <input type="text" className="form-control" id="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="url">Image URL</label>
			    <input type="text" className="form-control" id="url" placeholder="Image URL" value={this.state.url} onChange={this.handleUrlChange}/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="description">Description</label>
			    <textarea id="description" className="form-control" rows="3" placeholder="Description"  value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
			  </div>
			  <button className="btn btn-info" type="submit">Submit</button>
			</form>
		)
	}
});



module.exports = Edit;
