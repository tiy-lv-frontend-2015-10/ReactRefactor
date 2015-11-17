var React = require('react');

var Sub = React.createClass({
    render: function () {
        return (
        <li><a href={'/detail/' + this.props.objectId}><img src={this.props.url}/></a></li>);
    }
});


/*var Main = React.createClass({
    render: function () {
        return (
        <ul id="main">
        {this.props.data.map(function(post){
        return <Sub objectId={post.objectId} url={post.url}/>
            })}
            </ul>
        );
    }
    });*/
    
    



