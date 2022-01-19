import Mock from "./index.js"
const template = {
    id:{
        type: "intid",
        unique: true
    },
    nickname: {
        type: "nickname"
    }
}
const userMock = new Mock(template);

console.log(userMock.get(1))