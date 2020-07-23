# randomyuiz
[RandomYuiz](https://nodei.co/npm/randomyuiz) API wrapper for Node.js

## Installing
[![Version](https://nodei.co/npm/randomyuiz.png?compact=true)](https://nodei.co/npm/randomyuiz)
```sh
# npm
npm i randomyuiz
```

## Example Usage
* .animeImage(type) || 'anime', 'chika', 'oyasumi', 'zerotwo'
```js
async function start() {
    const { randomyui } = require("randomyuiz");
    let data = new randomyui;
    let img = await data.animeImage("anime"); //You can change "anime" with following options above

    console.log(img) //return an image
}
start()
```