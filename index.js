const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });

// This keeps the script alive on the cloud server
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("RPC is running 24/7!"));
app.listen(process.env.PORT || 3000);

client.on("ready", () => {
    console.log("Fake activity is now online 24/7!");
    client.setActivity({
        details: "Playing solo", // You can change this text
        state: "In-game",       // You can change this text
        startTimestamp: 1788719126000, // Your 314-hour start time
        instance: false,
    });
});

// Cloud hosting uses token environment variables to log into your account securely
client.login({ clientId: "YOUR_APPLICATION_ID_HERE" }).catch(console.error);
