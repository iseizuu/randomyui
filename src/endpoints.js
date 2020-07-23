const fetch = require('node-superfetch')

class randomyui {

    async imageZerotwo() {
        const { body } = await fetch.get('https://nezumiyuiz.glitch.me/api/zerotwo')
        const data = body.url

        return data;

    }

}
module.exports = randomyui;