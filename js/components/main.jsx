var React = require('react');

var Main = React.createClass({

  _click: function() {
    e.preventDefault();
    var href = $(this).attr('href').substr(1);
    this.props.router.navigate(href, {trigger:true});
  },

  render: function() {
    return (
      <ul id="main">
        {this.props.data.map(function(post){
          return(
            <li key={post.objectId} onClick={this._click}>
              <a href = {"/detail/" + post.objectId}>
                <img src ={post.url} />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
});

module.exports = Main;
