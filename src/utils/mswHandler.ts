import { categories } from "@/mocks/data/categories"
import { experts } from "@/mocks/data/users";

export const getUserData = (userId: number) => {
	const result = experts.filter((expert)=>{
		return expert.id === userId;
	})

	return result[0];
};

export const getCategoryId = (category: string) => {
	const result = categories.filter((categoryObject)=>{
		return categoryObject.name === category;
	});

	return result[0].id;
};