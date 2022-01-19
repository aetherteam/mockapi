import Mock from "./index.js"
const template = {
    id: {
        type: "intid",
        unique: true
    },
    firstname: {
        type: "firstname"
    },
    surname: {
        type: "surname"
    },
    d: {
        type: "person"
    }
}
const userMock = new Mock(template);

console.log(userMock.get(1))