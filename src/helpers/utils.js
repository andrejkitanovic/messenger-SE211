export const removeEmptyObjects = (array) => {
	return array.filter((value) => Object.values(value).some(el => el && el.length !== 0 ));
};

export const arrayToObject = (array) => {
	const object = {};
	array.map((el) => (object[Object.keys(el)[0]] = Object.values(el)[0]));
	return object;
};
