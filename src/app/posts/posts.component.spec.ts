import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { Post } from '../post';

describe('PostsComponent', () => {
	let component: PostsComponent;
	let fixture: ComponentFixture<PostsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PostsComponent ],
			imports: [ FormsModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PostsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return empty array by default', () => {
		expect(component.getAllPosts()).toEqual([]);		
	});

	it('should return all posts', () => {
		let post1 = new Post({id: 1, description: 'Post 1', upvote: 5, downvote: 12});
		component.newPost = post1; 
		component.onAddPost(true);
		let post2 = new Post({id: 2, description: 'Post 2', upvote: 25});
		component.newPost = post2;
		component.onAddPost(true);
		expect(component.getAllPosts()).toEqual([post1, post2]);
	});

		
	it('should upvote a post', () => {
		let post1 = new Post({id: 1, description: 'Post 1', upvote: 5, downvote: 12});
		component.newPost = post1; 
		component.onAddPost(true);
		let upPost = component.onUpvotePost(post1);
		expect(upPost.upvote).toEqual(6);
	});

	it('should downvote a post', () => {
		let post1 = new Post({id: 1, description: 'Post 1', upvote: 5, downvote: 12});
		component.newPost = post1; 
		component.onAddPost(true);
		let upPost = component.onDownvotePost(post1);
		expect(upPost.downvote).toEqual(13);
	});
	

});
