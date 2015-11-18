var Backbone = require('./backbone-parse');
var Post = require('./models/post');
var Posts = require('./collections/posts');
// var mainTemplate = require('./templates/main.html');
var React = require('react');
var ReactDOM = require('react-dom');
var Detail = require('./components/detail.jsx');
var Main = require('./components/main.jsx');
var Edit = require('./components/addEdit.jsx');
var Nav = require('./components/nav.jsx');
// var detailTemplate = require('./templates/detail.html');
// var addEditTemplate = require('./templates/addEdit.html');

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "detail/:objectId": "post",
    "post/add": "add",
    "post/:objectId/edit": "edit",
    "":"index"
  },
  index: function () {
    ReactDOM.render(<Nav router={this}/>, document.getElementById('nav'));
    Posts.fetch({
      success: function (posts) {
        // var html = mainTemplate({'data': posts.toJSON()});
        // $("#container").html(html);
        var data = posts.toJSON();

        ReactDOM.render(<Main data={data} router={this}/>, document.getElementById('container'));
      }
    });
  }
});

var router = new Router();

router.on('route:post', function (objectId) {
  var post = Posts.get(objectId);
  // var html = detailTemplate(post.toJSON());
  // $("#container").html(html);
  var test = post.toJSON();
  console.log(test);
  ReactDOM.render(<Detail router={this}/>, document.getElementById('container'));

});


router.on('route:add', function () {
 
  ReactDOM.render(<Edit/>, document.getElementById('container'));
});

router.on('route:edit', function (objectId) {
  var post = Posts.get(objectId);
 
  var edit = post.toJSON();
  console.log(edit);
  ReactDOM.render(<Edit data={edit}/>, document.getElementById('container'));

});

$('body').on('click', 'a', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

// $('#addBtn').on('click', function (e) {
//   e.preventDefault();
//   router.navigate('post/add', {trigger:true});
// });


$("body").on('submit', "#detailForm", function (e) {
  e.preventDefault();
  var post = new Post();
  if ($("#objectId").length) {
    post.set("objectId", $("#objectId").val());
  }
  if ($("#title").length) {
    post.set("title", $("#title").val());
  }
  if ($("#url").length) {
    post.set("url", $("#url").val());
  }
  if ($("#description").length) {
    post.set("description", $("#description").val());
  }
  post.save({}, {
    success: function (rsp) {
      router.navigate("/", {trigger: true});
    }
  })
});

module.exports = router;