import { Message } from "amqplib";
import { RabbitMQServer } from "./rabbitmqserver";

(async () => {
    const rabbitMQServer: RabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start(); // iniciei a conexao

    // receber a mensagem
    rabbitMQServer.consume("live_top", (message: Message) => {
        console.log(message.content.toString());
    });
})()