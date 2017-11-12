/**
 * model (schema) class defining structure of a Post
 *
*/
export class Post {

	id: number;
	description: string = '';
	upvote: number = 0;
	downvote: number = 0;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

