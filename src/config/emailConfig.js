const nodeMialer=require('nodemailer');

const {EMAIL_ID,EMAIL_PASSWORD}=require('./serverConfig');

const sender=nodeMialer.createTransport({
    service:"Gmail",
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASSWORD
    }
});

module.exports=sender;