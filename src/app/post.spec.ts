import { Post } from './post';

describe('Post', () => {
	it('should create an instance', () => {
		expect(new Post()).toBeTruthy();
	});

	it('should accept values in the constructor', () => {
		let post = new Post({
			description: 'my first post',
			upvote: 10,
			downvote: 7
		});
		expect(post.description).toEqual('my first post');
		expect(post.upvote).toEqual(10);
		expect(post.downvote).toEqual(7);
	});
});

