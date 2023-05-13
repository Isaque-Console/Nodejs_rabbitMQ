import "dotenv";
import { connect, Channel, Connection } from "amqplib"

export class RabbitMQServer {
    private connection: Connection;
    private channel: Channel;
    
    async start(){
        this.connection = await connect(process.env.RABBITMQ_URL || "");
        this.channel = await  this.connection.createChannel();
    }

    async publish(queue: string, message: string): Promise<Boolean> {
        return this.channel.sendToQueue(queue, Buffer.from(message));
    }
}