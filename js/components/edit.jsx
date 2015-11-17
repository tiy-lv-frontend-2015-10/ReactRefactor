var React = require('react');


var Edit = React.createClass({
	render: function() {
		return (
			<form id="detailForm">
			  <input id="objectId" type="hidden" value="{this.props.hamburger.objectId}" />
			  <div className="form-group">
			    <label htmlFor="title">Title</label>
			    <input type="text" className="form-control" id="title" placeholder="Title" value={this.props.hamburger.title} onChange={this.handleChange}/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="url">Image URL</label>
			    <input type="text" className="form-control" id="url" placeholder="Image URL" value={this.props.hamburger.url} onChange={this.handleChange}/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="description">Description</label>
			    <textarea id="description" className="form-control" rows="3" placeholder="Description">{this.props.hamburger.description}</textarea>
			  </div>
			  <button className="btn btn-info" type="submit">Submit</button>
			</form>
		)
	}
});

handleChange: function(event) {
    this.setState({value: event.target.value});

module.exports = Edit;
