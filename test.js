import Mock from "./index.js"

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
    }
    //todo:
    // customField: {
    //     type: "custom",
    //     mock: new Mock(tpl),
    //     count: 10
    // },
    
}
const userMock = new Mock(template);

console.log(userMock.get(1))