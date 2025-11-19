const social = require('./232544P');

console.log("Starting social media module")

console.log("Tesing FunctionAddPosts\n")
//testing functionAddposts 
social.functionAddPosts("Test", "new");
social.functionAddPosts("Test2", "meow");
social.functionAddPosts("Test", "wow");

console.log("\nTesing FunctionAddComment\n")

//testing functionAddComment
console.log(social.functionCommentPost(1,"new user","Testing"));
console.log(social.functionCommentPost(1,"Test","boo"));
console.log(social.functionCommentPost(0,"newUser","Testing2"));

console.log("\nTesing functionLikePost\n")
//testing FunctionLikePost
console.log(social.functionLikePost(2,"LikeTest"));
console.log(social.functionLikePost(2,"LikeTest"))
console.log(social.functionLikePost(2,"LikeTest"))

console.log("\nTesing functionDeletePost\n")
//testing functionDeletePost
console.log(social.functionDeletePost("Test", 2))

console.log("\nTesing functionViewDetails\n")
//testing functionViewDetails
console.log(social.functionViewDetails(2));
console.log(social.functionViewDetails(1));

