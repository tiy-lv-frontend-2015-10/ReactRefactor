var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <ul id="main">
      {this.props.data.map(function(post) {
        return (<li><a href={'/detail/' + post.objectId}><img src={post.url} /></a></li>)
      })}
      </ul>
    );
  }
});


/*var Sub = React.createClass ({
    render: function () {
        return (
        <li><a href= {'/detail/' + this.props.objectId><img src={this.props.url} /></a></li>;
    })
});*/


/*var Main = React.createClass({
    render: function () {
        return (
        <ul id="main">
        {this.props.data.map(function(post) {
            return <Sub objectId={post.objectId} url={post.url} />
        })}
        </ul>
        );
      }
    });*/

    module.exports = Main;
