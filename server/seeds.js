if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Discover Metero',
    url: 'http://wiki.jikexueyuan.com/',
    flagged: false
  });
  Posts.insert({
    title: 'Meteor Tutorial',
    url: 'https://www.meteor.com/',
    flagged: false,
    author: 'me'
  });
  Posts.insert({
    title: 'Baidu',
    url: 'http://www.baidu.com',
    flagged: false,
    author: 'me',
    category: 'Java'
  });
}
