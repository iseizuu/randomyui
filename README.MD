# randomyuiz
[RandomYuiz](https://nodei.co/npm/randomyuiz) API wrapper for Node.js

## Installing
[![Version](https://nodei.co/npm/randomyuiz.png?compact=true)](https://nodei.co/npm/randomyuiz)
```sh
# npm
npm i randomyuiz
```

## Example Usage
###### .animeImage(type)
* type = "anime", "chika", "hayasaka", "kaguyashinomiya", "megumin", "oyasumi", "rem", "zerotwo"
```js
async function start() {
    const { randomyuiz } = require("randomyuiz");
    let data = new randomyuiz;
    let img = await data.animeImage("anime"); //You can change "anime" with following options above

    console.log(img) //return an image
}
start()
```
###### .filterImage(type, imageURL)
* type = "sepia", "grayscale", "invert"
* imageURL(url) = (REQUIRED)
```js
async function startRendering() {
    const { randomyuiz } = require("randomyuiz");
    let data = new randomyuiz;
    let img = await data.filterImage('sepia', 'https://cdn.ram.moe/Bk6IgCMel.jpg'); //if imageURL empty, it will return default image as example

    console.log(img) //return an image
}
startRendering()
```
## Discord.js Example
```js
async function startRendering() {
    const { randomyuiz } = require("randomyuiz");
    let data = new randomyuiz;
    let images = await data.filterImage('sepia', msg.author.avatarURL({size: 2048, format: 'png'}));

    msg.channel.send({ files: [{ attachment: images, name: 'sepia.png' }] }); //result
}
startRendering()
```
