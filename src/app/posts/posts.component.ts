import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from '../post';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css'],
	encapsulation: ViewEncapsulation.None
})

/**
 * PostsComponent class
 * 
*/
export class PostsComponent implements OnInit {

	//posts array of type Post
	posts: Post[] = [];

	//newPost object of Post
	newPost: Post = new Post();	

	constructor() { }

	//get list of all the available posts on init
	public ngOnInit() {
		this.getAllPosts();
	}

	public getAllPosts() {
		return this.posts;
	}

	//add new posts
	onAddPost(isValid) {
		this.posts = this.posts.concat(this.newPost);
		this.newPost = new Post();
	}

	//upvote post
	onUpvotePost(post: Post) {
		++post.upvote;
		return post; 
	}

	//downvote post
	onDownvotePost(post: Post) {
		++post.downvote;
		return post; 
	}


}
