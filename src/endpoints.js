const fetch = require('node-superfetch')
const baseURL = 'https://nezumiyuiz.glitch.me/api/'

class randomyuiz {

    async animeImage(choice) {
        const list = ["anime", "chika", "hayasaka", "kaguyashinomiya", "megumin", "oyasumi", "rem", "zerotwo"]
        if(!list.find(a => a === choice.toLowerCase())) {
            return console.log('Please enter one of the following options :' + list.join(", "))
        }
        const res = await fetch.get(baseURL + choice.toLowerCase())
        const data = res.body.url;

        if(res.status !== 200) {
            return console.log('Api is currently down')
        }

        return data;

    }

    async filterImage(choice, imageURL) {
        const pict = imageURL || 'https://cdn.discordapp.com/attachments/688763072864976906/736122806600859789/chika.png'
        const list = ["grayscale", "invert", "sepia"]
        if(!list.find(a => a === choice.toLowerCase())) {
            return console.log('Please enter one of the following options : ' + list.join(", "))
        }
        const res = await fetch.get(`${baseURL}${choice.toLowerCase()}?image=${pict}`);
        const data = res.url;

        if(res.status !== 200) {
            return console.log('Api is currently down')
        };

        return data;

    }

}
module.exports = randomyuiz