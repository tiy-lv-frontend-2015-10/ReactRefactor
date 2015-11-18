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
  getDefaultProps: function() {
    return {
      data: {
        objectId: "CSevJJvMKa",
        url: "https://randomuser.me/api/portraits/women/32.jpg",
        title: "emy morin",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi itaque perspiciatis, ullam expedita, consequuntur quis alias dolorum optio tempora dignissimos sit ipsam odio, voluptatum velit doloremque voluptates vitae iste."
      }
    }
  },
  handleChange: function(e) {
    this.setState({
      url: e.target.value,
      title: e.target.value,
      description: e.target.value
    })
  },
  render: function() {
    <form id="detailForm">
      <input id="objectId" type="hidden" value={this.state.objectId} />
      <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" className="form-control" id="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
      </div>
      <div className="form-group">
      <label htmlFor="url">Image URL</label>
      <input type="text" className="form-control" id="url" placeholder="Image URL" value={this.state.url} onChange={this.handleUrlChange} />
      </div>
      <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea id="description" className="form-control" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
      </div>
      <button className="btn btn-info" type="submit">Submit</button>
      </form>
  }
});


module.exports = Edit;
