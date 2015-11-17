var React = require('react');

var addEdit = React.createClass({
    render: function (){
        return (
            <form id="detailForm">
  <input id="objectId" type="hidden" value={objectId} />
  <div className="form-group">
    <label for="title">Title</label>
    <input type="text" className="form-control" id="title" placeholder="Title" value={title}>
  </div>
  <div className="form-group">
    <label for="url">Image URL</label>
    <input type="text" className="form-control" id="url" placeholder="Image URL" value={url}>
  </div>
  <div className="form-group">
    <label for="description">Description</label>
    <textarea id="description" className="form-control" rows="3" placeholder="Description">{description}</textarea>
  </div>
  <button className="btn btn-default" type="submit">Submit</button>
</form>
        )
    }
});

module.exports=addEdit;