const amqp = require("amqplib");

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            console.log(message.content.toString());

            const input = JSON.parse(message.content.toString());

            console.log(`Received message ${input.number} with text: ${input.text}`);

            // acknowledge so that message can be dequeued from the server
            channel.ack(message);
        });

        console.log("Waiting for messages...");
    } catch (e) {
        console.log(e);
    }
}

connect();