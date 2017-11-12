import { Injectable } from '@angular/core';

//enviroment specific configs to be loaded 
import { environment } from 'environments/environment';

//http module
import { Http, Response } from '@angular/http';

//observable to subscribe for api response
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//model for post
import { Post } from './post';

//back-end api url
const API_URL = environment.apiUrl;

@Injectable()
export class PostDataService {

	posts: Post[] = [];

	constructor(private http: Http) { }

	/**
	 * Get all posts from the backend API (GET::/posts)
	 * @params
	 * @response Observable with array of post object
	 *
	*/
	getAllPosts(): Observable<Post[]> {
		return this.http
		.get(API_URL + '/posts')
		.map(response => {
			const posts = response.json();
			return posts.map((post) => new Post(post));
		})
		.catch(this.handleError);
	}

	/**
	 * create new post (POST::/posts)
	 * @params post: type Post
	 * @response Observable with post object
	 *
	*/
	addPost(post: Post): Observable<Post> {
		return this.http
		.post(API_URL + '/posts', post)
		.map(response => {
			return new Post(response.json());
		})
		.catch(this.handleError);
	}

	/**
	 * upvote an existing post (PUT::/posts/upvote)
	 * @params post: type Post
	 * @response Observable with array of post object
	 *
	*/
	upvotePost(post: Post): Observable<Post[]> {
		return this.http
		.put(API_URL + '/posts/upvote', post)
		.map(response => {
			const posts = response.json();
			return posts.map((post) => new Post(post));
		})
		.catch(this.handleError);
	}

	/**
	 * downvote an existing post (PUT::/posts/downvote)
	 * @params post: type Post
	 * @response Observable with array of post object
	 *
	*/
	downvotePost(post: Post): Observable<Post[]> {
		return this.http
		.put(API_URL + '/posts/downvote', post)
		.map(response => {
			const posts = response.json();
			return posts.map((post) => new Post(post));
		})
		.catch(this.handleError);
	}
	
	/**
	 * error handler to catch failure
	 * @params error: type Error
	 * @response Observable with error object
	 *
	*/
	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}	


}
