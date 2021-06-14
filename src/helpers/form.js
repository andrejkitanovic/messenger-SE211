import { removeEmptyObjects, arrayToObject } from './index';

export const objectIntoFormData = (object) => {
	const data = new FormData();
	for (let key in object) {
		if (key && object[key]) {
			data.append(key, object[key]);
		}
	}
	return data;
};
export const extractFormValues = (elements) => {
	return [...elements].map((el) => formatValue(el));
};

export const clearEnteredValues = (elements) => {
	return [...elements].map((el) => (el.value = ''));
};

export const formValuesToObject = (elements) => {
	let object = extractFormValues(elements);
	object = removeEmptyObjects(object);
	return arrayToObject(object);
};

export const formatValue = (element) => {
	if (element.type === 'file') {
		return { [element.name]: element.files[0] };
	} else {
		return { [element.name]: element.value };
	}
};

export const displayErrorMessage = (el,message) => {
	el.target.setCustomValidity(message)
}

export const resetErrorMessage = (el) => {
	el.target.setCustomValidity('');
}