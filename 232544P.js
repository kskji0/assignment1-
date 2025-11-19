let posts = [];
let WPostID= 0;

module.exports = {

 functionAddPosts(username, content) {

  // Count how many posts the user already made
  const userPostCount = posts.filter(p => p.username === username).length;

  // User-specific PostID
  const UserPostID = userPostCount + 1;

  // Global post ID BEFORE incrementing
  const globalPostID = WPostID;

  const newPost = { 
    UserPostID,  
    WPostID: globalPostID, 
    username, 
    content, 
    likes: 0, 
    comments: []
  };

  posts.push(newPost);
  WPostID++;  // Increase global post count

  console.log(
    `Post created successfully!\n` +
    `Amount of post ${username} have: ${UserPostID}\n` +
    `Global Post ID: ${globalPostID}\n`
  );
},


  // Add a comment to a post by PostID
  functionCommentPost(postID, username, comment) {

    // Find post by PostID
    const post = posts.find(p => p.WPostID === postID);

 if (post) {
    post.comments.push({ username, comment });
    return `${username} added a comment: "${comment}" to post #${postID}.`;
  } 
  else {
    return "Post not found, please try again.";
  }},

  //view post details by calling postID - global
  functionViewDetails(postID){
  const post = posts.find(p => p.WPostID === postID);

   if (!post) {
    return "Post not found, please try again.";
  }

  let details = 
    ` Posted by: ${post.username}\n` +
    ` Post #${post.WPostID}\n` +
    ` Content: ${post.content}\n` +
    ` Likes: ${post.likes}\n` +
    ` Comments:\n`;


  if (post.comments.length === 0) {
    details += "   No comments yet.";
  } else {
    post.comments.forEach((c, index) => {
      details += `${index + 1}. ${c.username}: ${c.comment}\n`;
    });
  }


  return details;
  },

 //function LikePost
functionLikePost(postID, username) {

  const post = posts.find(p => p.WPostID === postID);
  if (!post) {
    return "Post not found, please try again.";
  }
  post.likes += 1;

  return `${username} liked post #${postID}. Total likes: ${post.likes}`;

},

  //Function DeletePost
 functionDeletePost(username ,postID) {
  const index = posts.findIndex(p => p.WPostID === postID);

if (index === -1) {
  return "Post not found.";
} 
else if (posts[index].username !== username) {
  return "You can only delete your own post.";
}
else {
  posts.splice(index, 1);
  return "Post deleted.";
}


}

};
