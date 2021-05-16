const axios = require('axios');



const getPlayerCount = async () => {
    try {
        const resp = await axios.get('http://ip:port/players.json');
        
        
            let total = resp;
            return total;
        

    } catch (err) {
        console.error(err);

    }
};

    module.exports.getPlayerCount = getPlayerCount;