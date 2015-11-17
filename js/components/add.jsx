var React = require('react');


var Add = React.createClass({
  getInitialState: function() {
			return {
			objectId: null,
			title: null,
			url: null,
			description: null
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
		   <div className="form-group">
		     <label htmlFor="title">Title</label>
		     <input type="text" className="form-control" id="title" placeholder="Title" onChange={this.handleTitleChange} />
		   </div>
		   <div className="form-group">
		     <label htmlFor="url">Image URL</label>
		     <input type="text" className="form-control" id="url" placeholder="Image URL" onChange={this.handleUrlChange}/>
		   </div>
		   <div className="form-group">
		     <label htmlFor="description">Description</label>
		     <textarea id="description" className="form-control" rows="3" placeholder="Description" onChange={this.handleDescriptionChange}
		     ></textarea>
		   </div>
		   <button className="btn btn-info" type="submit">Submit</button>
		 </form>
	 )
 }
})

module.exports = Add;
