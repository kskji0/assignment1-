# Assignment 1 – Social Media Node Module
## Overview
This project is a simple social media simulation module built using Node.js.
Users can create posts, comment, like, delete posts, and view post details.
A JavaScript array is used as a dummy database, with both UserPostID and GlobalPostID (WPostID) generated automatically.

## Setup
Install Node.js
Import the module in your app.js

## Functions
1️⃣ Add a Post
Creates a new post with:
- Username
- Content
- Auto-assigned UserPostID
- Auto-assigned GlobalPostID

Usage:
social.functionAddPosts(username, content);

Parameters:
- username (String)
- content (String)

2️⃣ Comment on a Post
Adds a comment to an existing post identified by GlobalPostID.

Usage:
social.functionCommentPost(postID, username, comment);

Parameters:
- postID (Number – Global Post ID)
- username (String – who is commenting)
- comment (String)

3️⃣ Like a Post
Increases the like count of a post.

Usage:
social.functionLikePost(postID);

Parameters:
- postID (Number)
  
4️⃣ Delete a Post
Allows a user to delete their own post.

Usage:
social.functionDeletePost(username, postID);

Parameters:
- username (String – owner of the post)
- postID (Number – Global Post ID)

5️⃣ View Post Details
Shows all information about a post:

Username who posted
- Content
- Like count
- Comments list
- UserPostID
- GlobalPostID

Usage:
social.functionViewDetails(postID);

Parameters:
- postID (Number)

## Example Usage
console.log(social.functionAddPosts("Test", "Hello"));
console.log(social.functionCommentPost(0, "UserA", "Nice!"));
console.log(social.functionLikePost(0));
console.log(social.functionViewDetails(0));

## Reference
This is inspired by https://www.instagram.com/
