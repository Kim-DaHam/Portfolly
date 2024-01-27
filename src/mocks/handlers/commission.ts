import { HttpResponse, http } from 'msw';

import { commissions } from '../data/commissions';

import { FormValues } from '@/components/organisms/modal/commission-modal/CommissionModal';

export const commissionHandlers= [
	// http.post(`/commissions`, async ({request}) => {
	// 	const newPortfolio = await request.json() as FormValues;
	// 	const portfolioId = portfolios.length + 1;
	// 	const sectionId = sectionIdMap.get(newPortfolio.section) as number;
	// 	const categoryId = getCategoryId(newPortfolio.category) as number;
	// 	const tagId = getTagId(newPortfolio.tags, sectionId, portfolioId) as number[];

	// 	portfolios.push({
	// 		id: portfolioId,
	// 		userId: 1,
	// 		title: newPortfolio.title,
	// 		content: newPortfolio.content,
	// 		summary: newPortfolio.summary,
	// 		createdAt: Date.now(),
	// 		modifiedAt: Date.now(),
	// 		sectionId: sectionId,
	// 		categoryId: categoryId,
	// 		tagId: tagId,
	// 		likes: 0,
	// 		images: [],
	// 	});

	// 	return HttpResponse.json({id: portfolioId}, { status: 200 });
	// }),

	http.patch(`/commissions`, async ({request}) => {
		const url = new URL(request.url);
		const commissionId = url.searchParams.get('id') as string;
		const commissionData = await request.json() as any;
		const responseData: any = {};

		commissions.map((commission: any) => {
			if(commission.id === Number(commissionId)){
				Object.assign(commission.details, commissionData);
				Object.assign(responseData, commission);
			}
		});

		return HttpResponse.json(responseData, { status: 200 });
	}),

	http.post(`/reviews`, async ({request}) => {
		const url = new URL(request.url);
		const commissionId = url.searchParams.get('id') as string;
		const reviewData = await request.json() as any;
		const responseData: any = {};

		const commission = commissions.find((commission: any) => {
			return commission.id === Number(commissionId);
		});

		Object.assign(responseData, {
			createdAt: Date.now(),
			...reviewData,
		});

		commission!.review = responseData;

		return HttpResponse.json(responseData, { status: 200 });
	})

];