import generate from "./src/index.js";
// todo: custom return template 
// ex. {code: 200, data: data}
// todo: do error (just return code 500)

class Mock {
	constructor(template) {
		if (Object.keys(template).length < 1) throw new Error("Template must have at least one key");
		this.template = template;
	}

	get (count) {
		let template = Object.entries(this.template);

		if (count < 1) {
			throw new Error("You should generate at least one item (or else why do you need to call this method? :) ))");
		} else if (count === 1) {
			let generated = {};
			template.forEach((item) => {
				if (item[1].type === "person" && item[1].insert == true) {
					generated = {
						...generated,
						...generate(item[1], 1)
					};
				} else generated[item[0]] = generate(item[1], 1);
			});

			return generated;
		} else {
			let generated = {};
			template.forEach((item) => {
				if (item[1].type === "person" && item[1].insert == true) {
					generated[item[0]] = {
						...generated,
						...generate(item[1], 1)
					};
				} else generated[item[0]] = generate(item[1], count);
			});

			const generatedArr = Object.entries(generated);
			const result = [];
			for (let i = 0; i < count; i++) {
				let record = {};

				generatedArr.forEach((item) => {
					if (item[0] === "person" && item[1].insert == true) {
						record[item[0]] = {
							...record[item[0]],
							...item[1][i]
						};
					} else
						record[item[0]] = item[1][i];
				});

				result.push(record);
			}

			return result;
		}
	}
	getAsync (count, delay=1) {
		return new Promise( (resolve) => {
			setTimeout(() => {
				resolve(this.get(count));
			}, delay);
		});
	}
}
export default Mock;