# mockapify

## Installation

```
npm i mockapify
```

## Fast navigation

-   [Example](#example)
-   [Templates](#templates)
-   [Types](#types)
-   [Extended example](#extended-example)

## Example

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

console.log(userMock.get(10)); // generate 10 users from the template

userMock.getAsync(10).then((res) => {
	console.log(res);
}); // generate 10 users from the template, but async
```

## Templates

```js
const template = {
    fieldName: {
        type: "type"
        [, args]
    }
}
```

`fieldName` is a name of field you want to generate.

`type` is the type of generating field.

You can use other mocks in template (described below)

## Types

### intid

Returns int id that can be unique

`type: "intid"`

`unique: bool` _(default = false)_ -- Determines if the value must be unique

### person

Returns an object with person

`type: "person"`

`insert: bool` _(default = false)_ -- Determines if the value must be inserted in result or added as object

### randomrow

Returns a random row

`type: "randomrow"`

`len: int` _(default = 32)_ -- Determines if the value must be inserted in result or added as object

`canUseNumbers: bool` _(default = false)_ -- Can string contain numbers

### randomint

Returns a random int

`type: "randomint"`

`min: int` _(default = 0)_ -- Min value

`max: int` _(default = 10)_ -- Max value

### loremipsum

Returns loremipsum text that has no sense but useful for creating placeholder texts

`type: "loremipsum"`

`units: "sentences" || "words" || "paragraphs"` _(default = "sentences")_ -- Units of counting

`count: int` _(default = 1)_ -- Count of units to generate

### custom

Returns custom object that created from another mock

`type: "custom"`

`template: object` -- Template for created object

## Extended example

```js
import Mock from "./index.js";

const firstTemplate = {
    id: {
        type: "intid",
        unique: true,
    },
};
const secondTemplate = {
    id: {
        type: "intid",
        unique: false,
    },
    person: {
        type: "person",
        insert: true,
    },
    randomrow: {
        type: "randomrow",
        len: 100,
    },
    randomint: {
        type: "randomint",
    },
    loremipsum: {
        type: "loremipsum",
    },
    customField: {
        type: "custom",
        template: firstTemplate,
    },
};

const userMock = new Mock(secondTemplate);

console.log(userMock.get(1)); // sync version

userMock.getAsync(1).then((res) => {
    console.log(res);
}); // async version
```

This will return

```js
{
  id: 1057252,
  firstname: 'Maitea',
  surname: 'Rohon',
  fullname: 'Maitea Rohon',
  nickname: 'maitearohon',
  email: 'maitearohon@yandex.ru',
  age: 56,
  randomrow: 'rPNbhRyZYnydKTSwvycGpXXdlxaSrybBtStcAktcWPZoJGgwqIfIXrSjNTkBEbBrfwBWFkIzSVgXVOmxwNbPpepmateiBrLnEVnP',
  randomint: 5,
  loremipsum: 'Ad tempor amet voluptate veniam.',
  customField: { id: 1018622 }
}
```
