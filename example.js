import Mock from "./index.js";

const firstTemplate = {
	id: {
		type: "intid",
		unique: true
	}
};
const secondTemplate = {
	id: {
		type: "intid",
		unique: false
	},
	person: {
		type: "person",
		insert: true
	},
	randomrow: {
		type: "randomrow",
		len: 100
	},
	randomint: {
		type: "randomint"
	},
	loremipsum: {
		type: "loremipsum"
	},
	customField: {
		type: "custom",
		template: firstTemplate,
	}
    
};

const userMock = new Mock(secondTemplate);

console.log(userMock.get(1));
userMock.getAsync(1).then((res) => {
	console.log(res);
});