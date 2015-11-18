var Backbone = require('./backbone-parse');
var Post = require('./models/post');
var Posts = require('./collections/posts');
//var mainTemplate = require('./templates/main.html');
//var detailTemplate = require('./templates/detail.html');
//var addEditTemplate = require('./templates/addEdit.html');
var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/main.jsx');
var Detail = require('./components/detail.jsx');
var AddEdit = require('./components/addEdit.jsx');
var Nav = require('./components/nav.jsx');


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
        var data = posts.toJSON();
        ReactDOM.render(<Main data={data} />, document.getElementById('container'));
      }
    });
  }
});

var router = new Router();

router.on('route:post', function (objectId) {
  var post = Posts.get(objectId);
  var data = post.toJSON();
  ReactDOM.render(<Detail data={data} />, document.getElementById('container'));
});

router.on('route:add', function () {
  //var html = addEditTemplate({});
  //$("#container").html(html);
  // var data = post.toJSON();
  ReactDOM.render(<AddEdit />, document.getElementById('container'));
});

router.on('route:edit', function (objectId) {
  var post = Posts.get(objectId);
  //var html = addEditTemplate(post.toJSON());
  //$("#container").html(html);
  var data = post.toJSON();
  ReactDOM.render(<AddEdit data={data} post={post} />, document.getElementById('container'));
});

$('body').on('click', 'a', function (e){
  e.preventDefault();
  var href = $(this).attr('href').substr(1);
  router.navigate(href, {trigger:true});
});

$('#addBtn').on('click', function (e) {
  e.preventDefault();
  router.navigate('post/add', {trigger:true});
});


/*$("body").on('submit', "#detailForm", function (e) {
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
});*/

module.exports = router;