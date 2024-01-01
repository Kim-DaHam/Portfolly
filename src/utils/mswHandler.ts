import { categories } from "@/mocks/data/categories"

export const getCategoryId = (category: string) => {
	const result = categories.filter((categoryObject)=>{
		return categoryObject.name === category;
	});

	return result[0].id;
}