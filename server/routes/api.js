const express 	= require('express'),
	router 		= express.Router(),
	objectid 	= require('objectid');

let postJSON = require("../../posts.json");

/**
 * get all posts (20 only, sorted upvote descending)
 * @params
 * @response JSON array
 *
*/
router.get('/posts',(req,res) => {
	sortByUpvotesDesc();
	console.log(postJSON.length);
	postJSON = postJSON.slice(0,20);
	console.log(postJSON.length);
	printDb();	
	res.send(postJSON);
});

/**
 * add new post (default upvote: 0, downvote:0, id: ObjectId())
 * @params
 * @response JSON
 *
*/
router.post('/posts',(req,res) => {
	let addPost = req.body;
	if(!addPost.upvote) addPost.upvote = 0;
	if(!addPost.downvote) addPost.downvote = 0;
	addPost.id = objectid();
	postJSON.push(addPost);
	printDb();
	res.send(addPost);
});

/**
 * upvote given post by Id (default upvote: 0, ++upvote)
 * @params
 * @response JSON array
 *
*/
router.put('/posts/upvote',(req,res) => {
	let pIdx = findPostById(req.body.id);
	let post = postJSON[pIdx];
	if(!post.upvote) post.upvote = 0;
	++post.upvote;
	postJSON[pIdx] = post;
	sortByUpvotesDesc();
	printDb();
	res.send(postJSON);
});

/**
 * downvote given post by Id (default downvote: 0, ++downvote)
 * @params
 * @response JSON array
 *
*/
router.put('/posts/downvote',(req,res) => {
	let pIdx = findPostById(req.body.id);
	let post = postJSON[pIdx];
	if(!post.downvote) post.downvote = 0;
	++post.downvote;
	postJSON[pIdx] = post;
	sortByUpvotesDesc();
	printDb();
	res.send(postJSON);
});

/*---------------------------------------HELPER FuNCTION (can be moved to server/helper.js --------------------------*/

/**
 * find post in JSON array by Id
 * @params postId number
 * @response postIndex number
 *
*/
function findPostById(postId) {
	let postIndex = ''; 
	for(var i = 0; i < postJSON.length; i++) {
		if(postJSON[i].id == postId) {
			postIndex = i;
			break;
		}
	}
	return postIndex;	
}

/**
 * helper function to print JSON array prettify
 * @params 
 * @response
 *
*/
function printDb() {
	console.log("\n====================================================================\n\n");
	for(var i = 0; i < postJSON.length; i++) {
		let post = postJSON[i];
		console.log(post.id+"\t"+post.upvote+"\t"+post.downvote);
	}
}

/**
 * sort post json array by upvote descending
 * @params 
 * @response
 *
*/
function sortByUpvotesDesc() {
	postJSON.sort(function(a,b){
		if(a.upvote < b.upvote) return 1;
		if(a.upvote > b.upvote) return -1;
		return 0;
	});
}

module.exports = router;

