const amqp = require("amqplib");

const message = { number: process.argv[2] || 0, text: "hello" };

async function connect() {
    try {
        // creating the TCP connection
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        // to make sure the queue exists on the server, else create it
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(message)));
        console.log(`Message number ${message.number} sent to queue successfully`);
    } catch (e) {
        console.log(e);
    }
}

connect();
