const { Client } = require('discord-rpc');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('RPC 24/7 is running!'));
app.listen(process.env.PORT || 3000);

// Paste your Discord Application ID here inside the quotes
const CLIENT_ID = 'YOUR_APPLICATION_ID_HERE'; 

const rpc = new Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log('24/7 fake status is online!');
    rpc.setActivity({
        details: 'Playing solo',
        state: 'In-game',
        startTimestamp: 1788719126000, // Your 314-hour timestamp
        instance: false,
    });
});

// The cloud server will use a secure token variable to handle the connection
rpc.login({ clientId: CLIENT_ID, token: process.env.DISCORD_TOKEN }).catch(console.error);
