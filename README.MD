# randomyuiz
[RandomYuiz](https://nekobot.xyz/) API wrapper for Node.js

## Installing
[![Version](https://nodei.co/npm/randomyuiz.png?compact=true)](https://nodei.co/npm/randomyuiz)
```sh
# npm
npm i randomyuiz
```

## Example Usage
```js
async function start() {
    const { randomyui } = require("randomyuiz");
    let data = new randomyui;
    let img = await data.imageZerotwo();

    console.log(img) //return an image
}
start()
```