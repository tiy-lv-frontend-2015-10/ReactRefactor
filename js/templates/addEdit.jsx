var React = require('react');
var ReactDOM = require('react-dom');

var AddEdit = React.createClass({
    render: function() {
        var post = this.props.post || {};
        return (
            <form id="detailForm">
            <input id="objectId" type="hidden" defaultValue={post.objectid}/>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Title" defaultValue={post.title} />
            </div>
            <div className="form-group">
              <label htmlFor="url">Image URL</label>
              <input type="text" className="form-control" id="url" placeholder="Image URL" defaultValue={post.url} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="form-control" rows="3" placeholder="Description" defaultValue={post.description}></textarea>
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
          </form>
        )
    }
})

module.exports = AddEdit;

/*
<form id="detailForm">
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
</form>
*/