import { removeEmptyObjects, arrayToObject } from './index';

export const extractFormValues = (elements) => {
	return [...elements].map((el) => el.value && { [el.name]: el.value });
};

export const formValuesToObject = (elements) => {
	let object = extractFormValues(elements);
	object = removeEmptyObjects(object);
	return arrayToObject(object);
};
