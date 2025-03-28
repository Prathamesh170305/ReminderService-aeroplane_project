const amqplib=require('amqplib');

const createChannel=async()=>{
    try {
        const connection=await amqplib.connect(MESSAGE_BROKER_URL);
        const channel=await connection.createChannel();
        await channel.assertExchange(EXCHANGE_NAME,'direct',false);
        return channel;
    } catch (error) {
        throw error;
    }
}

const subscribeMessage=async (channel , service ,binding_key)=>{
    const applicationQueue=await channel.assertQueue(QUEUE_NAME);
    channel.bindQueue(applicationQueue.queue,EXCHANGE_NAME,binding_key);

    channel.consume(applicationQueue.queue,msg=>{
        console.log('recieved data');
        console.log(msg.subject.toString());
        console.log(msg.content.toString());
        channel.ack(msg);
    });
}

module.exports={
    createChannel,
    subscribeMessage
}