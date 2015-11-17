var React = require('react');
var ReactDOM = require('react-dom');

var Detail = React.createClass({
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

module.exports = Detail;



  
