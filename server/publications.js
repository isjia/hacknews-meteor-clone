Meteor.publish('allPosts', function(){
  return Posts.find({flagged: false});
})

Meteor.publish('postsByAuthor', function(author){
  return Posts.find({flagged: false, author: author});
})

Meteor.publish('postById', function(id){
  return Posts.find({_id: id});
})
