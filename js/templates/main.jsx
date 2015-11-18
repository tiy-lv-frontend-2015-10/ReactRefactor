var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function() {
        return (
            <ul id="main">
              {this.props.photos.map(function(photo){
                return (
                    <li>
                        <a href={"/detail/" + photo.objectId}>
                            <img src={photo.url} />
                        </a>
                    </li>
                )
              })}      
            </ul>
        )
    }
})

module.exports = Main;

/*  --this is the mustache I am changing in to React---
{{#data}}
  <li><a href="/detail/{{objectId}}"><img src="{{url}}" /></a>
{{/data}}
</ul>*/  