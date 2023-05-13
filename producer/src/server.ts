import { RabbitMQServer } from "./rabbitmqserver";

(async () => {
    const rabbitMQServer: RabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start(); // iniciei a conexao

    const user: any = {
        name: "Jhon Doe",
        username: "jhondoe"
    };

    // enviar mensagem para a fila
    rabbitMQServer.publish("live_top", JSON.stringify(user));
})()