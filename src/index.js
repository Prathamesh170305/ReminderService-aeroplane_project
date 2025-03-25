const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');
const {sendBasicEmail}=require('./services/email-service');
const jobs =require('./utils/jobs');

const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at : ${PORT}`)

        // sendBasicEmail(
        //     'support@admin.com',
        //     'prathameshpict@gmail.com',
        //     'This is the testing email',
        //     'Hey how are you , my frnd'
        // )

        // cron.schedule('*/2 * * * *', () => {
        //     console.log('running a task every two minutes');
        //   });

        jobs();
    });
}

setupAndStartServer();