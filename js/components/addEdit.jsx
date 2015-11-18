var React = require('react');

var AddEdit = React.createClass({
    clickHandle : function (ev) {
    var dataArr = this.props.data;
  if ($("#objectId").length) {
    dataArr.set("objectId", $("#objectId").val());
  }
  if ($("#title").length) {
    dataArr.set("title", $("#title").val());
  }
  if ($("#url").length) {
    dataArr.set("url", $("#url").val());
  }
  if ($("#description").length) {
    dataArr.set("description", $("#description").val());
  }
  dataArr.save({}, {
    success: function (rsp) {
      router.navigate("/", {trigger: true});
    }
  })
    if (dataArr.indexOf(e.target.value)) {
      this.setState({
        txt: ev.target.value,
        txt: ev.target.value
      });
    } else {
      this.setState({
        txt: ev.target.value,
        txt: ev.target.value,
      })
    }
  },
  getDefaultProps : function(){
    return{
    data :{
      objectId : "",
      title : "",
      url : "",
      description : ""
    }
  }
  },
    render: function (){
        return (
            <form id="detailForm">
  <input id="objectId" type="hidden" defaultValue={this.props.data.objectId} />
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" onChange={this.clickHandle}className="form-control" id="title" placeholder="Title" defaultValue={this.props.data.title} />
  </div>
  <div className="form-group">
    <label htmlFor="url">Image URL</label>
    <input type="text" onChange={this.clickHandle}className="form-control" id="url" placeholder="Image URL" defaultValue={this.props.data.url} />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea id="description" className="form-control" rows="3" placeholder="Description">{this.props.data.description.val}</textarea>
  </div>
  <button className="btn btn-default" type="submit">Submit</button>
</form>
        )
    }
});

module.exports=AddEdit;
