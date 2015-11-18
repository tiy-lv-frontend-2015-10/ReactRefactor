var React = require('react');

var Detail = React.createClass({
    render: function() {
        return (
      <div className="detail">
        <img src={this.props.data.url} />
        <ul>
          <li><strong>Title: </strong>{this.props.data.title}</li>
          <li><strong>Description: </strong>{this.props.data.description}</li>
          <li><a>href={"/post/" + this.props.data.objectId + "/edit"}</a>Edit</li>
        </ul>
      </div>
     )
    }
});

module.exports = Detail;

/*<div class="detail">
  <img src="{{url}}" />
  <ul>
    <li><strong>Title:</strong> {{title}}</li>
    <li><strong>Description:</strong> {{description}}</li>
    <li><a href="/post/{{objectId}}/edit">Edit</a></li>
  </ul>
</div>*/
