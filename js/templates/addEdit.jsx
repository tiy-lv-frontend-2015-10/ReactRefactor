var React = require('react');
var ReactDOM = require('react-dom');

var AddEdit = React.createClass({
    render: function() {
        return (
            <div class="detail">
                <img src={this.props.url} />
                <ul>
                    <li><strong>Title:</strong> {this.props.title}</li>
                    <li><strong>Description:</strong> {this.props.description}</li>
                    <li><a href={"/post/" + this.props.objectId + "/edit"}>Edit</a></li>
                </ul>                
            </div>
        )
    }
})

module.exports = AddEdit;


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