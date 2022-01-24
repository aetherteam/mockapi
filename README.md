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
} // create a template (explained below)

const userMock = new Mock(userTemplate); // create instance of the Mock from the template

const users = userMock.get(10); // generate 10 users from the template
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

`unique == true` will generate a unique value (default == false).


### Types

`intid` - integer id (e.g. 10000054)

`person` - object that contains firstname, surname, email and nickname 
```js
person: {
    fullname, // full name (e.g. Alex Jasmine)
    firstname, // first name (e.g. Alex)
    surname, // surname (e.g. Jasmine)
    nickname, // nickname (e.g. alexjasmine)
    email, // email address (e.g. alexjasmine@gmail.com)
    age // age (e.g. 46)
} // NOTE: THIS WILL NOT GENERATE PERSON, THIS WILL ADD ALL FIELDS TO THE OBJECT, NOT ONLY PERSON OBJECT SO YOU CAN USE ANY NAME OF THIS FIELD
```
`randomrow` - generates random string with length of 32 (e.g. "yfftyujk34i26j6h6no6rjfhfukfoepg")

`randomint:1:10` - generates random int between 1 and 1 

`loremipsum` - generates random text with 10 words (text has no sense);
