import { categories } from "@/mocks/data/categories"
import { tags } from "@/mocks/data/tags";
import { experts } from "@/mocks/data/users";

export const getUserData = (userId: number) => {
	const result = experts.find((expert)=>{
		return expert.id === userId;
	})

	return result;
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

export const getIsBookmarked = (portfolioId: number, bookmarks: number[]) => {
	const isBookmarked = bookmarks.includes(portfolioId) ? true : false;

	return isBookmarked;
};

export const getIsLiked = (portfolioId: number, likes: number[]) => {
	const isLiked = likes.includes(portfolioId) ? true : false;

	return isLiked;
};