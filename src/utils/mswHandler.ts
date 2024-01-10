import { categories } from "@/mocks/data/categories"
import { tags } from "@/mocks/data/tags";
import { experts } from "@/mocks/data/users";

export const getUserData = (userId: number) => {
	const result = experts.filter((expert)=>{
		return expert.id === userId;
	})

	return result[0];
};

export const getCategory = (categoryId: number) => {
	const result = categories.filter((category) => {
		return category.id === categoryId
	})

	return result[0].name;
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