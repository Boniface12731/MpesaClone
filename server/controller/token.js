const axios = require("axios");

const createToken = async(req, res, next) => {
    const secret = "dRFgIsOAUaiaN5NK";
    const consumer = "4MKhZD24b0ibxPw12SYtorvGEwjFcZOU";
    const auth = new Buffer.from(`${consumer} : ${secret}`).toString("base64");

     await axios.get (
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", 
        {
            headers:{
                authorization:`Basic ${auth}`,
            }, 
        })
        .then((data) => {
            console.log(data.data);
            next();
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err.message);
        });
}
module.exports = {createToken};