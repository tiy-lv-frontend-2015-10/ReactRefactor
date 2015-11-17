var React = require('react');

var addEdit = React.createClass({
  render: function () {
    return (
      <form id="detailForm"> 
        <input type="hidden" value={this.props.data.objectID}>
        <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value={this.props.data.title}/>
        </div>
        <div class="form-group">
        <label for="url">Image URL</label>
        <input type="text" class="form-control" id="url" placeholder="Image URL" value={this.props.data.url}/>
        </div>
        <div class="form-group">
        <label for="description">Description</label>
        <input type="textarea" class="form-control" rows="3" placeholder="description" id="description" value={this.props.data.description}/>
        </div>
        <button class="btn btn-default" type="submit">Submit</button>
        </form>
        )
    })}
});

module.exports = addEdit;
