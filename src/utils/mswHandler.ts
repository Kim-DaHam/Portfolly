import { categories } from "@/mocks/data/categories"
import { sections } from "@/mocks/data/sections";
import { tags } from "@/mocks/data/tags";
import { users } from "@/mocks/data/users";

export const getUserData = (userId: number) => {
	const result = users.find((user)=>{
		return user.id === userId;
	})

	return result;
};

export const getSection = (sectionId: number) => {
	const result = sections.find((section) => {
		return section.id === sectionId;
	})

	return result?.name;
};

export const getCategory = (categoryId: number) => {
	const result = categories.find((category) => {
		return category.id === categoryId
	})

	return result?.name;
};

export const getCategoryId = (categoryName: string) => {
	const result = categories.find((category) => {
		return category.name === categoryName
	})

	return result?.id;
};

export const getTags = (tagIds: number[]) => {
	const tagObjects = tags.filter((tag) => {
		return tagIds.includes(tag.id)
	})

	const result = tagObjects.map((tag) => {
		return tag.name;
	})

	return result;
};

export const getTagId = (tagNames: string[], sectionId: number, portfolioId: number) => {
	const result = tagNames.map((tagName) => {
		const tag = tags.find((tag) => tag.sectionId === sectionId && tag.name === tagName);
		if (tag) {
			tag.portfolioId.push(portfolioId);
			return tag.id;
		}
		tags.push({
			id: tags.length,
			sectionId: sectionId,
			portfolioId: [portfolioId],
			name: tagName,
		});
		return tags.length;
	});

	return result;
};

export const getIsBookmarked = (portfolioId: number, bookmarks: number[]) => {
	const isBookmarked = bookmarks.includes(portfolioId) ? true : false;

	return isBookmarked;
};

export const getIsLiked = (portfolioId: number, likes: number[]) => {
	const isLiked = likes.includes(portfolioId) ? true : false;

	return isLiked;
};