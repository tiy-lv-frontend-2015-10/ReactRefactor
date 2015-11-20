var React = require('react');
var ReactDOM = require('react-dom');

var Detail = React.createClass({
    render: function() {
        return (
            <div class="detail">
                <img src={this.props.post.url} />
                <ul>
                    <li><strong>Title:</strong> {this.props.post.title}</li>
                    <li><strong>Description:</strong> {this.props.post.description}</li>
                    <li><a href={"/post/" + this.props.post.objectId + "/edit"}>Edit</a></li>
                </ul>                
            </div>
        )
    }
})

module.exports = Detail;


/*
  li><strong>Title:</strong> {{title}}</li>
    <li><strong>Description:</strong> {{description}}</li>
    <li><a href="/post/{{objectId}}/edit">Edit</a></li>
*/