const cron=require('node-cron');
const emailService=require('../services/email-service');

const setUpJobs=()=>{
    cron.schedule('*/2 * * * *',async ()=>{
        const response =await emailService.fetchPendingEmails();
        console.log(response)
    });
}

module.exports=setUpJobs;