import dataFirstnames from './dataset/firstnames.js'
import dataSurnames from './dataset/firstnames.js'
import {
	loremIpsum
} from "lorem-ipsum";

function generate(object, count) {
	const type = object.type;
	if (!type) throw new TypeError("Using unexisted type " + type);

	let generator = getGenerator(type);

	if (count === 1) return generator(object);

	const result = [];
	for (let i = 1; i <= count; i++) {
		let generated;
		if (object.unique) {
			do {
				generated = generator(object)
			} while (result.includes(generated))
		} else {
			generated = generator(object)
		}

		result.push(generated);
	}
	return result;
}

function getGenerator(type) {
	return generators[type];
}

const generators = {
	intid: () => {
		return 1000000 + Math.floor(Math.random() * 1000);
	},
	person: () => {
		const firstname = dataFirstnames[Math.floor(Math.random() * dataFirstnames.length)];
		const surname = dataSurnames[Math.floor(Math.random() * dataSurnames.length)]
		const fullname = firstname + " " + surname;
		const nickname = (firstname + surname).toLowerCase();
		const email = nickname + randomMailingSystem();
		const age = 12 + Math.floor(Math.random() * 50);

		return {
			firstname,
			surname,
			fullname,
			nickname,
			email,
			age
		}
	},
	randomrow: (object) => {
		// canUseNumbers = boolean (true)
		// length = int (32)
		let characters = (object.canUseNumbers) ?
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' :
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

		object.len = object.len || 32

		let result = '';

		for (let i = 0; i < object.len; i++) {
			result += characters.charAt(Math.floor(Math.random() *
				characters.length));
		}

		return result;
	},
	randomint: (object) => {
		const min = object.min || 0;
		const max = object.max || 10;

		return (min + Math.floor(Math.random() * max));
	},
	loremipsum: (object) => {
		object.units = object.units || "sentences";
		object.count = object.count || 1;
		return loremIpsum({
			count: object.count,
			units: object.units 
		})
	}
}

function randomMailingSystem() {
	const mailingSystems = ['@gmail.com', '@icloud.com', '@yandex.ru', '@yahoo.com']
	return mailingSystems[Math.floor(Math.random() * mailingSystems.length)]
}

export default generate;