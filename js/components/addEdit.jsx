var React = require('react');

var AddEdit = React.createClass({
  getDefaultProps: function(){
    return{
      data: {
        objectID: "",
        URL: "",
        Title: "",
        Detail: "",
      }
    }
  },
  render: function () {
    return (
      <form id="detailForm"> 
        <input type="hidden" id="objectId" value={this.props.data.objectID}/>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Title" defaultValue={this.props.data.title}/>
      </div>
      <div className="form-group">
        <label htmlFor="url">Image URL</label>
        <input type="text" className="form-control" id="url" placeholder="Image URL" defaultValue={this.props.data.url}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="textarea" className="form-control" rows="3" placeholder="description" id="description" defaultValue={this.props.data.description}/>
      </div>
      <button className="btn btn-default" type="submit">Submit</button>
      </form>
      )
    }
});
    
module.exports = AddEdit;
