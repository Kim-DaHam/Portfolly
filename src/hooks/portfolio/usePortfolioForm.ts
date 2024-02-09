import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { toasts } from "@/redux/toastSlice";

import type { Section } from "@/types";

import { usePortfolioPostQuery, checkMultipleErrors, addValidationErrorToast } from "@/utils";

export type PortfolioFormValues = {
	title: string;
	content: string;
	section: Section;
	category: string;
	tags: string[];
	summary: string;
	images: string[];
};

const defaultValues: PortfolioFormValues = {
	title: '',
	content: '',
	section: 'Android/iOS',
	category: '',
	tags: [],
	summary: '',
	images: [],
};

type Props = {
	portfolio?: any,
};

export default function usePortfolioForm({portfolio} : Props) {
	const dispatch = useDispatch();
	const currentErrors = useSelector(toasts);

	const portfolioMutation = usePortfolioPostQuery(portfolio ? portfolio.id : undefined);

	const {
		register,
		reset,
		handleSubmit,
		getValues,
		setValue,
		formState: {
			dirtyFields,
			errors,
			isSubmitting
		}
	} = useForm<PortfolioFormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const onSubmit = (form: PortfolioFormValues) => {
		const isEditMode = portfolio ? true: false;

		if(isEditMode) {
			const copyForm: {[key: string]: any} = {...form};
			const changedKeys = Object.keys(dirtyFields);
			const changedValues: {[key: string]: any} = {};

			changedKeys.map((key) => {
				changedValues[key] = copyForm[key];
			});
			changedValues.section = form.section;

			return portfolioMutation.mutate(changedValues);
		}
		return portfolioMutation.mutate(form);
	};

	useEffect(() => {
		if(portfolio) {
			reset({
				title: portfolio.title,
				content: portfolio.content,
				section: portfolio.section,
				category: portfolio.category,
				tags: portfolio.tags,
				summary: portfolio.summary,
				images: portfolio.images,
			});
		}
	}, []);

	useEffect(() => {
		addValidationErrorToast(isSubmitting, errors, dispatch);
	}, [isSubmitting]);

	return { register, handleSubmit: handleSubmit(onSubmit), getValues, setValue };
}