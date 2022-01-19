class Generate {
	constructor() {}

	generate(object, count) {
		let gf;
		if (object.type === 'intid') {
			gf = intid;
		}

		if (count === 1) return gf();

		const result = [];
		for (let i = 1; i <= count; i++) {
			let generated = gf()
			do {
				result.push(generated)
			} while (!idsArray.includes(generated))
		}
		return result;
	}
}

function intid() {
	return 1000000 + Math.floor(Math.random() * 1000);
}

export default new Generate();