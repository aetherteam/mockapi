import Mock from "./index.js"
const tpl = {
    id: {
        type: "intid",
        unique: true
    }
}
const template = {
    id: {
        type: "intid",
        unique: true
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
        mock: new Mock(tpl),
    },
    
}
const userMock = new Mock(template);

console.log(userMock.get(1))