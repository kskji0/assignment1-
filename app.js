const social = require('./232544P');

console.log("Tesing FunctionAddCPosts\n")
//testing functionAddposts 
console.log(social.functionAddPosts("Test ", "new"));
console.log(social.functionAddPosts("Test2 ", "new"));
console.log(social.functionAddPosts("Test ", "new2"));

console.log("\nTesing FunctionAddComment\n")

//testing functionAddComment
console.log(social.functionCommentPost(1,"new user","Testing"));
console.log(social.functionCommentPost(1,"Test","good"));
console.log(social.functionCommentPost(0,"newUser","Testing2"));

console.log("\nTesing functionViewDetails\n")
//testing functionViewDetails
console.log(social.functionViewDetails(1));


