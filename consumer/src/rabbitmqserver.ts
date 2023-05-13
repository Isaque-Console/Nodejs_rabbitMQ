import "dotenv";
import { connect, Channel, Connection, Message } from "amqplib"

export class RabbitMQServer {
    private connection: Connection;
    private channel: Channel;
    
    async start() {
        this.connection = await connect(process.env.RABBITMQ_URL || "");
        this.channel = await  this.connection.createChannel();
    }

    async consume(queue: string, callback: (message: Message) => void) {
        return this.channel.consume(queue, (message: any | null) => {
            callback(message);
            this.channel.ack(message); // para remover mensagem ja lida
        });
    }
}