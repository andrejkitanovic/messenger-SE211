// import { render, screen } from '@testing-library/react';
// import App from './App';

import { arrayToObject, removeEmptyObjects, objectIntoFormData, formatValue } from './helpers';

// test('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

test('testing Array To Object function', () => {
	const array = [{ name: 'Andrej' }, { surname: 'Kitanovic' }];
	const object = { name: 'Andrej', surname: 'Kitanovic' };
	expect(arrayToObject(array)).toMatchObject(object);
});

test('testing Removing Empty Objects from Array function', () => {
	const array = [{ name: 'Andrej' }, { surname: 'Kitanovic' }, { test: '' }];
	const arrayResult = [{ name: 'Andrej' }, { surname: 'Kitanovic' }];
	expect(removeEmptyObjects(array)).toEqual(arrayResult);
});

test('testing Object into Form Data function', () => {
	const object = { name: 'Andrej', surname: 'Kitanovic' };
	const data = new FormData();
	data.append('name', 'Andrej');
	data.append('surname', 'Kitanovic');
	expect(objectIntoFormData(object)).toEqual(data);
});

test('testing Formating value depending on type for File', () => {
	const element = { name: 'file', type: 'file', files: ['video'] };
	const elementResult = {file:'video'};
	expect(formatValue(element)).toEqual(elementResult);
});

test('testing Formating value depending on type for Text', () => {
	const element = { name: 'firstname', type: 'text', value: 'Andrej' };
	const elementResult = {firstname:'Andrej'};
	expect(formatValue(element)).toEqual(elementResult);
});
