var React = require('react');

var Detail = React.createClass({
    // _handleClick: function(e) {
    //     this.setState ({

    //     })
    // },

  render: function () {
    return (
      <div className="detail">
        <img src={this.props.data.url} />
        <ul>
        <li><strong>Title:</strong> {this.props.data.title}</li>
        <li><strong>Description:</strong> {this.props.data.description}</li>
        <li><a onClick={this.handleClick} href={"/post/" + this.props.data.objectId + "/edit"}>Edit</a></li>
        </ul>
        </div>
        )
    }
});

module.exports = Detail;



