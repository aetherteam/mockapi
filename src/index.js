import dataFirstnames from './dataset/firstnames.js'
import dataSurnames from './dataset/firstnames.js'

function generate(object, count) {
	if (!object.type) throw new Error("Field type is not defined");
	if (!generators[object.type]) throw new TypeError("Using unexisted type " + object.type);

	let generator = generators[object.type];

	if (count === 1) return generator();

	const result = [];
	for (let i = 1; i <= count; i++) {
		let generated = generator()
		if (object.unique) {
			do {
				result.push(generated);
			} while (!result.includes(generated))
		} else {
			result.push(generated);
		}
	}
	return result;
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
		const email = nickname + "@gmail.com";
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
	firstname: () => {
		return dataFirstnames[Math.floor(Math.random() * dataFirstnames.length)]
	},
	surname: () => {
		return dataSurnames[Math.floor(Math.random() * dataSurnames.length)]
	}
}
export default generate;