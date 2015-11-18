var React = require('react');

var Nav = React.createClass({
	_click: function(e) {
		e.preventDefault();
  		this.props.router.navigate('post/add', {trigger:true});

	},
	render: function() {
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="/">
			        TIY Instagram
			      </a>
			    </div>
			      <ul className="nav navbar-nav">
			        <li><button id="addBtn" onClick={this._click} className="btn btn-default navbar-btn" href="/add">Add</button></li>
			      </ul>
			  </div>
			</nav>
		)
	}
})

module.exports = Nav;



// $('#addBtn').on('click', function (e) {
//   e.preventDefault();
//   router.navigate('post/add', {trigger:true});
// });