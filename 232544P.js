let posts = [];
let WPostID= 0;

module.exports = {

  // Upload posts by username and content.
  functionAddPosts(username, content) {

    // Count how many posts user already made
    const userPostCount = posts.filter(p => p.username === username).length;

    // Next PostID for this user
    let NewPostID = parseInt(userPostCount + 1);

    const newPost = { UserPostID: NewPostID,  WPostID: WPostID, username, content, likes: 0, comments: []};

    posts.push(newPost);
    WPostID++; 
    return `User:${username} Uploaded a new post!\n`+
    `GlobalPostID:${WPostID}, Your PostID:${NewPostID}`;
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

  fucntionLikePost(){

  },
};
