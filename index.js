import Mock from './src/mock.js'

const ids = new Mock({id: {type: "intid"}})
const users = ids.get(2);

console.log(users)