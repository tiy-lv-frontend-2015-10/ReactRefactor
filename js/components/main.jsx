var React = require("react");

var Main = React.createClass({
  // _handleClick: function(e){
  //   this.setState({
  //     img: e.target.value,
  //     url: e.target.value
  //   })
  // },
  render: function() {
    return (
      <ul id="main">
        {this.props.data.map(function(post){
          return (
            <li>
              <a href = {"/detail/" + post.objectId}>
              <img src={post.url}/>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
});

module.exports = Main;


// _handleChange : function(e) {
//     var foodArr = this.props.food;
//     if (this.props.food.indexOf(e.target.value)) !==1) {
//     this.setState({
//       txt: e.target.value
//       img: e.target.value
//     });
//     } else {
//       this.setState({
//         txt: e.target.value
//       })
//     }
//   },
//   // handleImgClick: function(e) {
//     console.log(this.state.img);
//     })
//   },
//   render: function () {
//     return (
//       <div>
//         <input type="text" onChange={this._handleChange} value={this.state.text}   }
//         <img src={"/images/" + this.state.img + ".jpeg"} />
//         //<img onClick={this.handleImgClick} src={"/images/" + this.state.img + ".jpeg"} /> 
//       </div>