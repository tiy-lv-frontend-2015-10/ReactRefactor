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
        objectId: "",
        url: "",
        title: "",
        description: ""
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

/*<form id="detailForm">
  {{#objectId}}
  <input id="objectId" type="hidden" value="{{objectId}}" />
  {{/objectId}}
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Title"{{#title}} value="{{title}}"{{/title}}>
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
</form>*/
