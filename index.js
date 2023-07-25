
const MainClient = require("./disspace");
const client = new MainClient();

client.connect()

module.exports = client;

client.on('ready', () => {
 client.user.setActivity(`-help | -play`, { type: 'PLAYING' })
}) 