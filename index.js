import Mock from './src/mock.js'

const ids = new Mock({id: {type: "intid"}})
const users = ids.get(1);

console.log(users)