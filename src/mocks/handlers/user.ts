import { HttpResponse, http } from 'msw';

import { users } from '../data/users';

export const userHandlers= [
	http.get('/users', ({request}) => {
		const url = new URL(request.url);
		const userId = url.searchParams.get('id') as string;
		const loginId = '1';

		const user = users.find((user) => {
			return user.id === Number(userId);
		});

		if(userId !== loginId) {
			delete user?.name;
			delete user?.phone;
			delete user?.likes;
			delete user?.bookmarks;
		}

		return HttpResponse.json(user, { status: 200 });
	}),

];