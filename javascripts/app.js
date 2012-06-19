var App = Em.Application.create({
  title: '',
  ready: function() {
    document.title = this.get('title');
    $('.page-header .title').html(this.get('title'));
  }
});
