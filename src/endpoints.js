const fetch = require('node-superfetch')

class randomyui {

    async animeImage(choice) {
        const list = ['anime', 'chika', 'oyasumi', 'zerotwo'];
        if(!list.find(a => a === choice.toLowerCase())) {
            return console.log('Please enter one of the following options :' + list.join(", "))
        }
        const res = await fetch.get('https://nezumiyuiz.glitch.me/api/' + choice.toLowerCase())
        const data = res.body.url;

        if(res.status !== 200) {
            return console.log('Api is currently down')
        }

        return data;

    }

}
module.exports = randomyui