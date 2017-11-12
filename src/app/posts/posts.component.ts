import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from '../post';
import { PostDataService } from '../post-data.service';

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

	constructor(private postDataService: PostDataService) { }

	public ngOnInit() {
		this.getAllPosts();
	}

	//get list of all the available posts on init
	public getAllPosts() {
		this.postDataService
		.getAllPosts()
		.subscribe(
			(posts) => {
				this.posts = posts;
			}
		)
	}

	//add new posts
	onAddPost(isValid) {
		if(!isValid) return false;
		this.postDataService
		.addPost(this.newPost)
		.subscribe(
			(newPost) => {
				this.posts = this.posts.concat(newPost);
				this.newPost = new Post();
			}
		)
	}

	//upvote post
	onUpvotePost(post: Post) {
		this.postDataService
		.upvotePost(post)
		.subscribe(
			(posts) => {
				this.posts = posts;
			}
		)
	}

	//downvote post
	onDownvotePost(post: Post) {
		this.postDataService
		.downvotePost(post)
		.subscribe(
			(posts) => {
				this.posts = posts;
			}
		)
	}


}
