// todo: use import assertions once they're supported by Node.js & ESLint
// https://github.com/tc39/proposal-import-assertions


import baseProfile from './base.js';
import {products} from './products.js';

const profile = {
	...baseProfile,
	locale: 'de-CH',
	timezone: 'Europe/Zurich',

	products,

	trip: true,
	radar: true,
	refreshJourneyUseOutReconL: true,
	reachableFrom: true,
};

export {
	profile,
};
