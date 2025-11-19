# Assignment 1 – Social Media Node Module
## Overview
This project is a simple social media simulation module built using Node.js.
Users can create posts, comment, like, delete posts, and view post details.
A JavaScript array is used as a dummy database, with both UserPostID and GlobalPostID (WPostID) generated automatically.

## Setup
Install Node.js
Import the module in your app.js:
const social = require('./<your_module_name>.js');

## Functions
1. Add Post

Create a new post.

social.functionAddPosts(username, content);

2. Comment on Post
social.functionCommentPost(postID, username, comment);

3. Like a Post
social.functionLikePost(postID);

4. Delete a Post
social.functionDeletePost(username, postID);

5. View Post Details
social.functionViewDetails(postID);

## Example Usage
console.log(social.functionAddPosts("Test", "Hello"));
console.log(social.functionCommentPost(0, "UserA", "Nice!"));
console.log(social.functionLikePost(0));
console.log(social.functionViewDetails(0));
