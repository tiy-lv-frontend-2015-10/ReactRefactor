var React = require('react');

var detailForm = React.createClass({
  render: function () {
    <form id="detailForm">

    <input id="objectId" type="hidden" value={this.props.objectId} />
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title" value={this.props.title}>
    </div>
    <div class="form-group">
      <label for="url">Image URL</label>
      <input type="text" class="form-control" id="url" placeholder="Image URL" value={this.props.url}>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" class="form-control" rows="3" placeholder="Description">{this.props.description}</textarea>
    </div>
    <button class="btn btn-default" type="submit">Submit</button>
</form>

  }
});
