import Mock from "./index.js"
const template = {
    id:{
        type: "intid",
        unique: true
    },
    firstname: {
        type: "firstname"
    },
    surname: {
        type: "surname"
    }
}
const userMock = new Mock(template);

console.log(userMock.get(1))