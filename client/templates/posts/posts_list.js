var postsData = [
  {
    title: 'Discover Metero',
    url: 'http://wiki.jikexueyuan.com/'
  },
  {
    title: 'Meteor Tutorial',
    url: 'https://www.meteor.com/'
  },
  {
    title: 'Baidu',
    url: 'http://www.baidu.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
