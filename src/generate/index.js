import dataNicknames from './dataset/nicknames.js'

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
			} while (!idsArray.includes(generated))
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
	nickname: () => {
		return dataNicknames[Math.floor(Math.random() * dataNicknames.length)]
	}
}
export default generate;