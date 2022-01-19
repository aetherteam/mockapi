import generate from './generate/index.js';

class Mock {
    constructor(template) {
        if (Object.keys(template).length < 1) throw new Error("Template must have at least one key");
        this.template = template;
    }

    get(count) {
        let template = Object.entries(this.template);

        if (count < 1) {
            throw new Error("You should generate at least one item (or else why do you need to call this method? :) ))");
        } else if (count === 1) {
            let generated = {}
            template.forEach((item) => {
                generated[item[0]] = generate(item[1], 1);
            });

            return generated;
        } else {
            let generated = {}
            template.forEach((item) => {
                generated[item[0]] = generate(item[1], count);
            });

            const generatedArr = Object.entries(generated)
            const result = []
            for (let i = 0; i < count; i++) {
                let record = {}

                generatedArr.forEach((item) => {
                    record[item[0]] = item[1][i];
                });

                result.push(record)
            }

            return result;
        }
    }

}
export default Mock;