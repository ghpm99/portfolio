'use server';

import { cache } from 'react';

interface IUserData {
	login: string;
	avatar_url: string;
	html_url: string;
	name: string;
	bio: string;
	company: string;
	location: string;
	email: string;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
}

const revalidate = 3600 * 24;

export const fetchUserData = cache(async () => {
	const res = await fetch('https://api.github.com/users/ghpm99', {
		next: { revalidate: revalidate },
	});

	const data: IUserData = await res.json();

	return {
		avatar: data.avatar_url,
		url: data.html_url,
		name: data.name,
		bio: data.bio,
	};
});

export const fetchProjectsData = cache(async (sort: string) => {
	const res = await fetch(
		`https://api.github.com/users/ghpm99/repos?sort=${sort}`,
		{ next: { revalidate: revalidate } }
	);
	const data = await res.json();
	return data;
});

export const fetchProjectDetailData = cache(async (name: string) => {
	const res = await fetch(
		`https://api.github.com/users/ghpm99/repos/${name}`,
		{ next: { revalidate: revalidate } }
	);
	const data = await res.json();
	return data;
})
