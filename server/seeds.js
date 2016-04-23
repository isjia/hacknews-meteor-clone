if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Discover Metero',
    url: 'http://wiki.jikexueyuan.com/'
  });
  Posts.insert({
    title: 'Meteor Tutorial',
    url: 'https://www.meteor.com/'
  });
  Posts.insert({
    title: 'Baidu',
    url: 'http://www.baidu.com'
  });
}
