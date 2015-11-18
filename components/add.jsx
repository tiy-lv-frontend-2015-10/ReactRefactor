var React = require('react');

var Add = React.createClass({
  getInitialState: function() {
    return {
      objectId: null,
      url: null,
      title: null,
      description: null
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
    return (
      <form id="detailForm">

        //<input id="objectId" type="hidden" value="{{objectId}}" />

        <div class="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Title" onChange={this.handleChange} value={this.state.title} />
        </div>
        <div class="form-group">
          <label htmlFor="url">Image URL</label>
          <input type="text" class="form-control" id="url" placeholder="Image URL" onChange={this.handleChange} value={this.state.url} />
        </div>
        <div class="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" class="form-control" rows="3" placeholder="Description" onChange={this.handleChange} value={this.state.description} /></textarea>
        </div>
        <button class="btn btn-default" type="submit">Submit</button>
      </form>
    )
  }
});

module.exports = Add;
