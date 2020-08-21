# Description
Code from Hussein Nasser's [RabbitMQ Crash Course](https://www.youtube.com/watch?v=Cie5v59mrTg)

# What to do here
1. Run `docker run --name rabbitmq -p 5672:5672 rabbitmq`
1. Run `npm run publish`
1. Messages will be sent to the queue
1. Run `npm run consume`
1. All messages in the queue will be received and acknowledged. If messages are not acknowledged they remain in the queue.