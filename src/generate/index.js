class Generate {
	constructor() { }

	generateID(count) {
		let idsArray = [];

		const gen = () => {
			return 1000000 + Math.floor(Math.random() * (count * 10));
		}

		for (let i = 1; i <= count; i++) {
			let result = gen()
			
			do {
				idsArray.push(result)
			} while (!idsArray.includes(result))
		}

		return idsArray;
	}
}

export default new Generate();