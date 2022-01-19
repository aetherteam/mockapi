# mockapi
## Installation

```
npm i mockapi
```

## Usage

```js
import mockapi as Mock;

const userTemplate = {
    id: {
        type: "intid",
        unique: true
    },
    name: {
        type: "fullname"
    }
}

// create template (explained below)

const userMock = new Mock(userTemplate); // create instance of Mock from template

const users = userMock.get(10); // generate 10 users from template
```

### Templates 

```js
const template = {
    fieldName: {
        type: Mock.type,
        unique: true
    }
}
```
`fieldName` is a name of field you want to generate.

`type` is the type of generating field.

`unique == true` will generate a unique value (defaul == false).


## Types

`intid` - integer id (ex. 10000054)
`fullname` - full name (ex. Alex Jasmine)
`firstname` - first name (ex. Alex)
`surname` - surname (ex. Jasmine)
`nickname` - nickname (ex. alexjasmine)
`email` - email address (ex. alexjasmine@gmail.com)

`randomrow:20` - generates random string with length of 20 (ex. "yfndforjfhfukfoepg")
`randomint:1:10` - generates random int between 1 and 10

`randomtext:10` - generates random text with 10 words (text has no sense);
