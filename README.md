# mockapi
## Installation

`npm i mockapi`

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

const users = userMock.get(10); // generate 10 users
```

### Templates 

```js

```